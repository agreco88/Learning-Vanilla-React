//**BASE IMPORTS**//
import React, {Component} from 'react';
//**UI IMPORTS**//
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
//**ANIMATION IMPORTS**//
import Fade from 'react-reveal/Fade';

class FavoriteItem extends Component { 

   render(){

	   let {
	   	item,
	   	onDismissFavorite
	   } = this.props;

	  return (
	  		<Fade>
		    	<div className='table-row rounded-corners favorite-item'>
		        	<span style={{width:'25%'}} className='item-title'>
		          	<a href={item.url}> {item.title} </a>
		        	</span>
		        	<span className="author" style={{width:'25%'}}>  
		        		{item.author} 
		        	</span>
					
		        {item.num_comments > 300 ? (
			        <span style={{width:'25%'}}>
			        	<p className='outstanding-topic popular pulsate'>{item.num_comments} - POPULAR! </p>
			        </span>
		      			) : (
		        	<span style={{width:'25%'}}>  {item.num_comments} </span>
		      	)}

			    {item.points > 800 ? (
			        <span style={{width:'25%'}}>
			        	<p className='outstanding-topic hot pulsate'> {item.points} - HOT!</p>
			        </span>
			      		) : (
			        <span style={{width:'25%'}}>  {item.points} </span>
		      	)}

		        <span className='buttons' style={{width:'25%'}}>
			    	<Button onClick = { () => onDismissFavorite(item.objectID) }
			    			color="secondary">
		   				<DeleteIcon />
		  			</Button>
		        </span>
		      </div>
	      </Fade>
		)    	
   }	
}

export default FavoriteItem;