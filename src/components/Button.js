import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//presentational component for new-quote button 

const Button = ({buttonText, fetchNewQuote}) => (
 <button onClick={fetchNewQuote} className="btn btn-primary" id="new-quote">{buttonText}</button>
); 

export default Button;