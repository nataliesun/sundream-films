import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoPlayer.scss';

class VideoPlayer extends Component {
  render() {
    return (
      <div className="VideoPlayer">
        <div className="title-bar">
          <h2>Wedding</h2>
          <div className="controls">
            <FontAwesomeIcon icon="share-alt" className="fa-icon" />
            <span />
            <FontAwesomeIcon icon="info" className="fa-icon" />
          </div>
        </div>
        <div className="current-video">
          Video
        </div>
        <div className="video-search-bar">
          <div className="search-input">
            <FontAwesomeIcon icon="search" />
            <input placeholder="Search video..." type="text" />
          </div>
          <div className="filter">
            <select>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
          </div>
        </div>
        <div className="video-bar">
          Videos
        </div>
        <span id="next">Next <FontAwesomeIcon icon="long-arrow-alt-right" /></span>
      </div>
    );
  }
}

export default VideoPlayer;