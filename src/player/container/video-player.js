import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer';
import Controls from '../components/video-player-controls'

class VideoPlayer extends Component {
  //Estate of the player
  state = {
    pause: true,
    duration: 0,
  }
  //Handler of the state of the player
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  // Comentario sobre componentDidMount
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

// Envio de los metadatos
  handleLoadedMetadata = event => {
    this.video= event.target
    this.setState({
      duration: this.video.duration
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video"
        />
        <Controls>
          <PlayPause
            pause= {this.state.pause}
            handleClick= {this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
          />
        </Controls>

        <Video
          autoPlay={this.props.autoPlay}
          pause = {this.state.pause}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer