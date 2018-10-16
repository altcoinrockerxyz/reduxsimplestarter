// The purpose of this component is to make sure there's an input form at the top
// That connects to YouTube API when a user types something in
import React, { Component } from "react"; // this is always required to turn function into a call

// L225: Define a component function
/*
const SearchBar = () => {
  return <input />; // React.createElement
};
*/
// Something to make sure the user can see it
// connect (export) this component into the index.js

// L226: create a Class based component
// Define a new Class called SearchBar
// and give it access to all the functionality
// that React.Component has
// class SearchBar extends React.Component { <- change to ES6 by adding Component on TOP
class SearchBar extends Component {
  // L228
  constructor(props) {
    super(props); // call the parent method via super()

    this.state = { term: "" }; // whenever we use state,
    // we initialize it by creating a new object and assigning it to this.state
    // the object we pass will also contain properties (term, in this case)
    // that we want to record on the state
  }

  // A method to return JSX (a render method)
  /*
  render() {
    return <input onChange={event => console.log(event.target.value)} />; // L227: Pass the result of the event handler
  }
  */

  // L227: define the event handler that monitors and captures changes to the input box
  // add one argument or event object, which describes
  // the context or info about the event that occured
  // check what happens by doing a console.log();

  // L227: Use an error function to condense and make it look more compact

  //  }

  /* Delete the whole arrowHandler and just type it within the returned method
  onInputChange(event) {
    console.log(event.target.value);
  }
  */

  // L229
  /*
  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ term: event.target.value })}
        />
        &nbsp;Rewrite Value of the Input: {this.state.term}
      </div>
    ); // L227: Pass the result of the event handler
  }*/

  // L229
  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    ); // L227: Pass the result of the event handler
  }
}

export default SearchBar;
// Any file in our application that imports SearchBar
// will get our SearchBar component
