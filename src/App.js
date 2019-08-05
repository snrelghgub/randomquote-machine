import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'; 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotesList: [],
      quotePointer: 50, //default pointer
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(rawdata => rawdata.json())
    .then(quotesList => this.setState({ quotesList }));
  }

  get newQuote(){
    if(!this.state.quotesList.length || this.state.quotePointer == null){
      return undefined; 
    }
    return this.state.quotesList[this.state.quotePointer]; 
  }

  getNewQuotePointer(){
    if(!this.state.quotesList.length){
      return undefined; 
    }
    return Math.floor(Math.random()*this.state.quotesList.length);
  }

  render() {
    //console.log(this.state.quotesList);
    //console.log(Math.floor(Math.random()*this.state.quotesList.length))
    return (
      <div className="App" id="quote-box">
        <div id="text">{this.newQuote ? this.newQuote.quote : '' }</div>
        <div id="author">{this.newQuote ? this.newQuote.author : '' }</div>
        <Button buttonText="New quote" fetchNewQuote={this.getNewQuote}/>
      </div>
    );
  }

}

export default App;
