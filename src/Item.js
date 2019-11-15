//**BASE IMPORTS**//
import React, {Component} from 'react';
//**UI IMPORTS**//
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
//**ANIMATION IMPORTS**//
import Fade from 'react-reveal/Fade';

class Item extends Component { 

   render(){

	   let {
	   	item,
	   	onDismiss,
	   	onFavorite,
	   } = this.props;

	  return (
	  	<Fade>
	      <div className='table-row rounded-corners'>
	        <span style={{width:'20%'}} className='item-title'>
	          <a href={item.url}> {item.title} </a>
	        </span>
	        <span className="author" style={{width:'20%'}}>  {item.author} </span>
	        
	        {item.num_comments > 300 ? (
		        	<span style={{width:'20%'}}>
		        		<p className='outstanding-topic popular pulsate'>{item.num_comments} - POPULAR! </p>
		        	</span>
	      			) : (
	        		<span style={{width:'20%'}}>  
	        			{item.num_comments} 
	        		</span>
	      	)}

		    {item.points > 800 ? (
		        	<span style={{width:'20%'}}>
		        		<p className='outstanding-topic hot pulsate'> {item.points} - HOT!</p>
		        	</span>
		      			) : (
		        	<span style={{width:'20%'}}>
		        		{item.points}
		        	</span>
	      	)}

			<span className='buttons' style={{width:'20%'}}>
		        <Button
		          onClick = { () => onDismiss(item.objectID) }
		          color="secondary">
	        		<DeleteIcon />
			    </Button>
					<Button
			          onClick = { () => onFavorite(item) }
			          color="primary">
		        		<FavoriteIcon />
				    </Button>
				</span>
	      </div>
	    </Fade>
		)    	
   }	
}

export default Item;


