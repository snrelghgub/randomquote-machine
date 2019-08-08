import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Twitter = ({displayedQuote}) => (
  <a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${displayedQuote.quote}&hashtags=quotes`}>  
      <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
  </a>
);


export default Twitter;