import React from "react"; // L235: Create the Video List Item component

const VideoListItem = ({ video }) => {
  // L237: ES6 refactor that replaces props
  // with another var that gets re-used like on line 7
  // L237: define a new variable
  // const video = props.video; <-- this line is the same as ({ video }).
  // console.log(video);
  // L237: Use Bootstrap items, use className instead of class

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
