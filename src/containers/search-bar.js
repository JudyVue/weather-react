import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super (props); //this is like inheritance
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    //this constructor is an instance of SearchBar, we define a function of onInputChange, we bind it to that the "this" context is bound to the context of this constructor scope
  }

  //if you've got a callback that makes a refernce to this, chances are you need to bind it to the bigger constructor
  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    //We need to go and fetch weather data
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
