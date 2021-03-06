import React from "react";
import VideoListItem from "./video_list_item"; // L235

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    // return a video list item and
    // pass it the video as prop name video
    // L236: Add a key to each item to make it unique
    // L240: onVideoSelect
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  // L234: values will arrive as an argument to this function
  // return <ul className="col-md-4 list-group">{props.videos.length}</ul>; // L234: this renders a bootstrap based column <ul> style
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
