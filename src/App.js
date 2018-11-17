import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    inputText: '',
    inputTextLength: 0,
    inputLetters: []
  }

  inputTextChangedHandler = (event) => {
    this.setState( {
      inputText: event.target.value,
      inputTextLength: event.target.value.length,
      inputLetters: event.target.value.split('')
    } )
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.inputLetters];
    letters.splice(letterIndex, 1);
    this.setState( {
      inputLetters: letters,
      inputText: letters.join(''),
      inputTextLength: letters.length
    } )
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          value={this.state.inputText}
          onChange={this.inputTextChangedHandler}
          ></input>
        <p>Length of Input: {this.state.inputTextLength}</p>
        <ValidationComponent length={this.state.inputTextLength} />
        {this.state.inputLetters.map((letter, index) => {
          return <CharComponent
            key={index}  
            letter={letter}
            click={() => this.deleteLetterHandler(index)} />
        })}

        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
