import React, { Component } from "react"; // give me access to React,
// which is installed in our dependencies library
// L233: Import Component

import ReactDOM from "react-dom"; // L220: give access to ReactDOM

// L232: Get access to the downloaded search package
import YTSearch from "youtube-api-search";

// LL225: import the exported function from search_bar.js
import SearchBar from "./components/search_bar";

// L234: Import video_list.js
import VideoList from "./components/video_list";

// L238: Import video detail
import VideoDetail from "./components/video_detail";

// L224: Declare a variable to hold the API Key
const API_KEY = "AIzaSyA-svHXpb-3lJEZD15Q6rKNbAifXHkEsQg";

/*

L232
Call it and the first argument is going to be
an Object with a search term and an API key


YTSearch({ key: API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

*/

/*
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
*/

// L233: Redefine const into class and extend (extends) Component
// Going from functional to a class based component
class App extends Component {
  // L233: Setup the Constructor (App boots up)
  constructor(props) {
    super(props);

    // L233: Result is an array
    this.state = {
      videos: [],
      selectedVideo: null // L240
    };

    this.videoSearch("surfboards"); // L242: call the processes within videoSearch method,
    // which are the same syntax that were initially coded in this area.
  }

  // L242: create a new method
  videoSearch(term) {
    // move the initial search (L233) into this method
    // L233: Get some data pop up right away, move YTSearch in here
    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      // (videos) => is the same as function(videos)
      // console.log(data); Update this.state with a new list of videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0] // L240
      });
      // ^ line is the same as this.setState({ videos: videos });
    });
  }

  // L233: Add a render method
  // render the search bar via this JSX tag
  // L234: render video list via a JSX tag, pass data much like passing props in React
  // L40: onVideoSelect, passing a function that manipulates another component
  // updates app state with a new video
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div> // this HTML stuff is called JSX
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM))

// L219: Try out with a wrong set of codes
ReactDOM.render(<App />, document.querySelector(".container"));
// L221: ask react to render App <App></App> is the same as <App />
// L222: input the second argument where the instance is supposed to be placed within the DOM
// all we have to do is pass a reference to the container
