//**BASE IMPORTS**//
import React, {Component}  from 'react';
//**COMPONENT IMPORTS**//
import FavoriteItem from './FavoriteItem.js';
import TableLabelArea from './TableLabelArea.js';
//**ANIMATION IMPORTS**//
import Bounce from 'react-reveal/Fade';

class FavoritesTable extends Component { 

   render(){

	   let {
	   	list,
	   	onDismissFavorite, 
	   } = this.props;

	   	if(list.length===0){
	   		return (
	   			<Bounce>
		   			<div className="favorites-table">
		   				<p className="centered"> Your favorites items go here! </p>
		   			</div>
	   			</Bounce>
	   		)
	   	}
	    else return (
	    	<Bounce>
	    	<TableLabelArea favoritesList={list} />
				<div className="table">
				    {list.map(item =>
				      <FavoriteItem 
				      		key={item.objectID}
				      		item={item} 
				      		onDismissFavorite={onDismissFavorite}
				      />
			   		)}
			  	</div>
		  	</Bounce>
		)
	}
}
	
export default FavoritesTable;