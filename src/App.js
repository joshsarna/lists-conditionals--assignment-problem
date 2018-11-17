import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent';

class App extends Component {
  state = {
    inputText: '',
    inputTextLength: 0
  }

  inputTextChangedHandler = (event) => {
    this.setState( {
      inputText: event.target.value,
      inputTextLength: event.target.value.length
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

        <ol>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
