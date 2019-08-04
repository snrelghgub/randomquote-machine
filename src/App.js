import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'; 

class App extends React.Component {
  getNewQuote(){
    console.log("working"); 
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonText="New quote" fetchNewQuote={this.getNewQuote}/>
      </div>
    );
  }

}

export default App;
