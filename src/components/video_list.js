import React from "react";

const VideoList = props => {
  // L234: values will arrive as an argument to this function
  return <ul className="col-md-4 list-group">{props.videos.length}</ul>; // L234: this renders a bootstrap based column <ul> style
};

export default VideoList;
