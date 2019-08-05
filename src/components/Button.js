import React from 'react';
//presentational component for new-quote button 

const Button = ({buttonText, fetchNewQuote}) => (
 <button onClick={fetchNewQuote} id="new-quote">{buttonText}</button>
); 

export default Button;