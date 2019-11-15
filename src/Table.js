//**BASE IMPORTS**//
import React, {Component} from 'react';
//**COMPONENT IMPORTS**//
import Item from './Item.js';
import TableLabelArea from './TableLabelArea.js';
//**ANIMATION IMPORTS**//
import Bounce from 'react-reveal/Fade';

class Table extends Component { 

   render(){

	   let {
	   	list,
	   	onDismiss,
	   	onFavorite,
	   } = this.props;

	   if(list.length===0){
	   		return (
	   			<Bounce>
			   			<div className="favorites-table">
			   				<p className="centered"> No results, try searching for a specific topc in the search bar </p>
			   			</div>
	   			</Bounce>
	   		)
	   	}

	    return (
		    	<Bounce>
			    	<TableLabelArea/>
					<div className="table">
						{list.map(item =>
						    <Item key={item.objectID}
						 		item={item} 
						   		onFavorite={onFavorite}
						   		onDismiss={onDismiss}
						    />
						    )}
					</div>
				</Bounce>
		)    	
   }
}   

export default Table;

