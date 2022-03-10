import React, { Component } from 'react';
import './App.css';
import data from './data.js';

class CreateCard extends Component {
  constructor() {
    super();
  }

  handleSubmission(e) {
    e.preventDefault();
    //create a result obj
    let resultObj = {};
    //get all the input values
    let inputFirstName = document.getElementById('input-first-name').value;
    let inputLastName = document.getElementById('input-last-name').value;
    let inputCity = document.getElementById('input-city').value;
    let inputCountry = document.getElementById('input-country').value;
    let inputEmployer = document.getElementById('input-employer').value;
    let inputJob = document.getElementById('input-job').value;
    let inputMovieOne = document.getElementById('input-movie-one').value;
    let inputMovieTwo = document.getElementById('input-movie-two').value;
    let inputMovieThree = document.getElementById('input-movie-three').value;
    //Put all the values with the correct keys in the result object
    resultObj['id'] = this.props.totalCards + 1;
    resultObj['name'] = {first: inputFirstName, last: inputLastName};
    resultObj['city'] = inputCity;
    resultObj['country'] = inputCountry;
    resultObj['employer'] = inputEmployer;
    resultObj['title'] = inputJob;
    resultObj["favoriteMovies"] = [inputMovieOne, inputMovieTwo, inputMovieThree];

    //create a new array and spread it with the original data plus the new created object
    let newArray = [resultObj];
    let finalArray = this.props.data.concat(newArray);
    this.props.passNewData(finalArray);
    this.props.falseChange();
    //change the state of the data property to the new array
  }

  render() {
    return (
      <div className="new-card">
          <form>
           <label>
             First Name:
             <input type="text" id="input-first-name"/>
             <br></br>
             Last Name:
             <input type="text" id="input-last-name"/>
             <br></br>
             City:
             <input type="text" id="input-city"/>
             <br></br>
             Country:
             <input type="text" id="input-country"/>
             <br></br>
             Employer:
             <input type="text" id="input-employer"/>
             <br></br>
             Job Title:
             <input type="text" id="input-job"/>
             <br></br>
             Favorite Movie #1:
             <input type="text" id="input-movie-one"/>
             <br></br>
             Favorite Movie #2:
             <input type="text" id="input-movie-two"/>
             <br></br>
             Favorite Movie #3:
             <input type="text" id="input-movie-three"/>
             <br></br>
           </label>
           <button id="new-submission" onClick={(e) => {this.handleSubmission(e)}}>New submission</button>
          </form>
        </div>
    );
  }
}


export default CreateCard;