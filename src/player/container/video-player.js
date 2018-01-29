import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'

class VideoPlayer extends Component {
  //Estate of the player
  state = {
    pause: true,
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
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video"
        />
        <PlayPause
          pause= {this.state.pause}
          handleClick= {this.togglePlay}
        />
        <Video
          autoPlay={this.props.autoPlay}
          pause = {this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer