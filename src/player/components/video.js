import React, {Component} from 'react';
import './video.css';

class Video extends Component {
  //Handling the play and pause of the video
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

  //The render Method recieving all the props and events
  render() {
    const {
      handleLoadedMetadata, handleTimeMediaUpdate, handleSeeked, handleSeeking
    } = this.props
    return (
      <div className="Video">
        <video
          src={this.props.src}
          autoPlay={this.props.autoPlay}
          ref= {this.setRef}
          onLoadedMetadata = {handleLoadedMetadata}
          onTimeUpdate = { handleTimeMediaUpdate }
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>

    )
  }
}

export default Video