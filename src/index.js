import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MediaCard({ profilePic, title, time, body, imgUrl }) {
  return <div>
    <div className="f-card">
      <div className="header">
        <img className="co-logo" src={profilePic} />
        <div className="co-name"><a href="#">{title}</a></div>
        <div className="time"><a href="#">{time}</a></div>
      </div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="reference">
        <img className="reference-thumb" src={imgUrl} />
      </div>
    </div>
  </div>
}
ReactDOM.render(
  <>
    <MediaCard profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZeLx9oSQBEGCf4uWV13-j8opLzZydGDSDg&usqp=CAU"
      title="Node" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1hsywJzcZwbpjo3pmDdurg8vr1C598B4ow&usqp=CAU" />

    <MediaCard profilePic="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
      title="Express" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGXkn6Eo8eeiFv7O-1QEaenXwr_EcqmxtnQ&usqp=CAU" />
      
    <MediaCard profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEH2aubEVOBGpqL84kcWFrYxZHbw0qTvZ72A&usqp=CAU"
      title="React" time={new Date().toLocaleTimeString()} body="Height is optional, if no height is specified the image will be a square.Example:"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rM-kCti9KwKLTEw4Qe5fHd2pL7skTPPKEw&usqp=CAU" />
  </>,
  document.getElementById('root')
);

