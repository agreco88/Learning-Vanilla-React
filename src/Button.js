import React from 'react';

//Standard base most generic type of button
//onClick = Recieves onClick function
const Button = ({ onClick, className, type, text}) =>

  <button
    onClick={onClick}
    className={className}
    type={type}
  > 
  {text}
  </button>

export default Button;