import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js'; 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotesList: [],
      quotePointer: null, 
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(rawdata => rawdata.json())
    .then(quotesList => this.setState({
      quotesList: {quotesList}
    }));
  }

  getNewQuote(){
    console.log("working"); 
  }

  render() {
    console.log(this.state.quotesList);
    return (
      <div className="App" id="quote-box">
        <Button buttonText="New quote" fetchNewQuote={this.getNewQuote}/>
      </div>
    );
  }

}

export default App;
