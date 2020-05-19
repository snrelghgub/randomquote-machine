import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'; 
import Twitter from './components/Twitter.js'; 
import 'bootstrap/dist/css/bootstrap.css';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotesList: [],
      quotePointer: 50, //default pointer
    }
    this.changeQuote = this.changeQuote.bind(this)
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(rawdata => rawdata.json())
    .then(quotesList => this.setState({ quotesList }));
  }

  /*GET method returns a new quote (includes quote & author name) from quotesList*/
  get newQuote(){
    if(!this.state.quotesList.length || this.state.quotePointer == null){
      return undefined; 
    }
    return this.state.quotesList[this.state.quotePointer]; 
  }
  
  /*method returns an integer/random number between 0 & quotesList.length-1*/
  getNewQuotePointer(){
    if(!this.state.quotesList.length){
      return undefined; 
    }
    return Math.floor(Math.random()*this.state.quotesList.length);
  }

  /*method changes the value of quotePointer & helps update the state of app to render a new quote */  
  changeQuote(){
    this.setState({
      quotePointer : this.getNewQuotePointer()
    });
  }
  
  render() {
    return (
      <div className="container-fluid">
       <div className="card text-center">
       <img className="card-img-top" src={process.env.PUBLIC_URL + 'app-header-pic.jpg'}></img>
        <div className="card-body text-dark my-auto">
          <h3 className="card-title">Random Quote Machine</h3>
          <h6 class="card-subtitle mb-2 text-muted">developed by <a target="blank" href="http://github.com/snrelghgub" id="github-link">Taizy</a></h6>
          <p className="blockquote mb-0 m" id="text">" {this.newQuote ? this.newQuote.quote : ''} "</p>
          <p className="blockquote-footer" id="author">{this.newQuote ? this.newQuote.author : ''}</p>
          <Button buttonText="New quote" fetchNewQuote={this.changeQuote}/>
          <div className="card-footer" id="twitterShare-wrapper">
          <Twitter displayedQuote={this.newQuote ? this.newQuote : ''}/>
          </div>
        </div>
       </div>
    </div>
    );
  }

}

export default App;
