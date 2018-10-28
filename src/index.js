import React from "react"; // give me access to React,
// which is installed in our dependencies library

import ReactDOM from "react-dom"; // L220: give access to ReactDOM

// L232: Get access to the downloaded search package
import YTSearch from "youtube-api-search";

// LL225: import the exported function from search_bar.js
import SearchBar from "./components/search_bar";

// L224: Declare a variable to hold the API Key
const API_KEY = "AIzaSyA-svHXpb-3lJEZD15Q6rKNbAifXHkEsQg";

/* 

L232
Call it and the first argument is going to be 
an Object with a search term and an API key 
*/

YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

// Create a new component. This component should produce
// some HTML. NOTE: const is an ES6 or ES2016 syntax
// const App = function() {
const App = () => {
  // L222: Replace the initial var and function declaration
  // with ES6 version
  return (
    <div>
      <SearchBar />
    </div> // this HTML stuff is called JSX
  );
};

// Take this component's generated HTML and put it
// on the page (in the DOM))

// L219: Try out with a wrong set of codes
ReactDOM.render(<App />, document.querySelector(".container"));
// L221: ask react to render App <App></App> is the same as <App />
// L222: input the second argument where the instance is supposed to be placed within the DOM
// all we have to do is pass a reference to the container
