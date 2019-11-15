//**BASE IMPORTS**//
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//**COMPONENT IMPORTS**//
import SearchBar from './SearchBar.js';
import Table from './Table.js';
import FavoritesTable from './FavoritesTable.js';
//**UI IMPORTS**//
import CircularProgress from '@material-ui/core/CircularProgress';
//**ANIMATION IMPORTS**//
import Fade from 'react-reveal/Fade';


const DEFAULT_QUERY = 'React';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';


class App extends Component {

  constructor(props){
    //Mandatory Super 
    super(props);
    //Internal state componente declaration
    this.state = {
      result: null, 
      favorites: [],
      textfieldValue: DEFAULT_QUERY,

    }
    //Method bindings
    this.setSearchResults = this.setSearchResults.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onDismissFavorite = this.onDismissFavorite.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  setSearchResults(result){
    this.setState({ result });
  }

  onSearchChange(event){
    this.setState({ textfieldValue : event.target.value })
  }

  onDismiss(removeID){
    let idToRemove = item => item.objectID !== removeID;
    let updatedHits = this.state.result.hits.filter(idToRemove);
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    })
  }

  onDismissFavorite(removeID){
    //function name = parameters => return (implicit) statement
    let idToRemove = item => item.objectID !== removeID;
    let updatedFavorites = this.state.favorites.filter(idToRemove);
    this.setState({
      favorites: updatedFavorites
    })
  }

  onFavorite(item){
    let updatedFavorites = this.state.favorites;
    let alreadyFavorite = false;


    if(updatedFavorites.length > 0){

      for(var i = 0; i < updatedFavorites.length; i++){
        if(updatedFavorites[i].objectID===item.objectID){
          alreadyFavorite=true;
          break;  
        }
      }






    }


    if(alreadyFavorite){
      console.log("Item already exists in the favorites list");
      //**Error code (Shake animation) goes here** 
    } else {
      updatedFavorites = this.state.favorites.concat(item);
      this.onDismiss(item.objectID);
      this.setState({
        favorites: updatedFavorites
      }); 
    }
  }

  onSearchSubmit(event){
    const { textfieldValue } = this.state;
    this.fetchSearchResults(textfieldValue);
    event.preventDefault();
  }

  fetchSearchResults(textfieldValue){
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${textfieldValue}&${PARAM_PAGE}`)
      .then(response => response.json())
      //Updates state with function using the resulting response as param
      .then(result => this.setSearchResults(result))
      .catch(error => error);
  }

  render(){

    const {
      result,
      favorites,
      textfieldValue
    } = this.state ;

    return(
      <Fade>
        <div className='page centered'>
          <div className='interactions'>
              <SearchBar
                value={textfieldValue}
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
              />
          </div>
          <FavoritesTable
            list={favorites}
            onDismissFavorite={this.onDismissFavorite}
          />
          { result
            //If no result, display circular progress indicator 
              ? <Table
                  list={result.hits}
                  onDismiss={this.onDismiss}
                  onFavorite={this.onFavorite}
                />              
              : <CircularProgress />
          }
        </div>
      </Fade>
    )
  }

  componentDidMount(){
    const { textfieldValue } = this.state;
    this.fetchSearchResults(textfieldValue);
  }

}



export default App;
