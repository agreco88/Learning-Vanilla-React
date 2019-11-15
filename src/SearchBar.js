import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ value, onChange, onSubmit }) =>
  
  <form onSubmit={onSubmit}>
    <TextField
      	InputProps={{
    	endAdornment: (
      		<InputAdornment>
        		<IconButton
        		    variant="contained" 
      				color="primary"
      				type="submit">
          			<SearchIcon />
        		</IconButton>
      		</InputAdornment>
    		)
  		}}
        id="standard-basic"
        label="Search your topic!"
        margin="normal"
        type="text"
      	value={value}
      	onChange={onChange}
    />
  </form>

export default SearchBar;