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
  // A method to return JSX (a render method)
  render() {
    return <input />;
  }
}

export default SearchBar;
// Any file in our application that imports SearchBar
// will get our SearchBar component
