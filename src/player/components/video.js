import React, {Component} from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }

  //Sending the HTML element in order to handle it with react
  setRef = element => {
    this.video = element;
  }
  render() {
    return (
      <div className="Video">
        <video
          src={this.props.src}
          autoPlay={this.props.autoPlay}
          ref= {this.setRef}
        />
      </div>

    )
  }
}

export default Video