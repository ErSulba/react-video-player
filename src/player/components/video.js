import React, {Component} from 'react';
import './video.css';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video
          src={this.props.src}
          autoPlay={this.props.autoPlay}
        />
      </div>

    )
  }
}

export default Video