import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import CreateCard from './CreateCard.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data,
      currentCard: 0,
      totalCards: 25,
      create: false,
      createdUser: {}
    }
  }

  //Onclick next method
  handleNext(num) {
    if (num === this.state.totalCards - 1) {
      return;
    }
    this.setState({currentCard: num + 1});
  };

  //Onclick previous method
  handlePrevious(num) {
    if (num === 0) {
      return;
    }
      this.setState({currentCard: num - 1});
  }
//Onclick Delete method
  handleDelete(arr, num) {
    arr.splice(num, 1);
   this.setState({data: arr, totalCards: this.state.totalCards - 1});
  }

//passNewData
passNewData(arr) {
  console.log(arr);
  this.setState({data: arr, totalCards: this.state.totalCards + 1});
  // alert(this.state.data.length);
}

//changing it to false
falseChange() {
  this.setState({create: false});
}


  render() {
    let currentCard = this.state.currentCard;
    if (this.state.create) {
      return <CreateCard createdUser={this.state.createdUser} totalCards={this.state.totalCards} data={this.state.data} passNewData={this.passNewData.bind(this)} falseChange={this.falseChange.bind(this)}/>
    } else {
    return (
      <div className="App">
        <div id="display-box">
          <section id="data-list">
            <div id="number-on">
             {this.state.data[currentCard].id + "/" + this.state.totalCards}
            </div>
          <ul>
            <p id="name">{this.state.data[currentCard].name.first + " " + this.state.data[currentCard].name.last}</p>
            <p id="from"><b>From:</b> {this.state.data[currentCard].city + ", " + this.state.data[currentCard].country}</p>
            <p id="job-title"><b>Job Title:</b> {this.state.data[currentCard].title}</p>
            <p id="employer"><b>Employer:</b> {this.state.data[currentCard].employer}</p>
          </ul>
          </section>
          <section id="favorite-movies">
            <b>Favorite Movies:</b>
            <ol>
              <li>{this.state.data[currentCard].favoriteMovies[0]}</li>
              <li>{this.state.data[currentCard].favoriteMovies[1]}</li>
              <li>{this.state.data[currentCard].favoriteMovies[2]}</li>
            </ol>
          </section>
        </div>
        <div id="bottom-buttons">
          <button id="previous-btn" onClick={() => {this.handlePrevious(this.state.currentCard)}}>{"< Previous"}</button>
          <button id="edit-btn">Edit</button>
          <button id="delete-btn" onClick={() => {this.handleDelete(this.state.data, this.state.currentCard)}}>Delete</button>
          <button id="new-btn" onClick={() => {this.setState({create: true})}}>New</button>
          <button id="next-btn" onClick={() => {this.handleNext(this.state.currentCard)}}>{"Next >"}</button>
        </div>
      </div>
    );
    }
  }
}

export default App;
