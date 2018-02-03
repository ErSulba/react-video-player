import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer';
import Controls from '../components/video-player-controls'
import FormattedTime from '../../utilities/formatted-time'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'

class VideoPlayer extends Component {
  //Estate of the player
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationFloat: '',
    currentTimeFloat: '',
    loading: false,
  }
  //Handler of the state of the player
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  // Comment about componentDidMount
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoPlay)
    })
  }

// Handlers of the metadata of a video
  handleLoadedMetadata = event => {
    this.video= event.target
    this.setState({
      duration: FormattedTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }
  handleTimeMediaUpdate = event => {
    this.setState({
      currentTime: FormattedTime(this.video.currentTime),
      currentTimeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
  }
  handleVolumeToggle = event => {
    this.setState({
      lastVolume: this.state.volume,
      volume: this.state.volume===0 ? this.state.lastVolume : 0
    })
    this.video.volume = this.state.lastVolume
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
            currentTime={this.state.currentTime}
          />
          <ProgressBar
            duration={this.state.durationFloat}
            value = {this.state.currentTimeFloat}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeToggle={this.handleVolumeToggle}
          />
        </Controls>
        <Spinner
          active={this.state.loading}
        />

        <Video
          autoPlay={this.props.autoPlay}
          pause = {this.state.pause}
          handleLoadedMetadata = {this.handleLoadedMetadata}
          handleTimeMediaUpdate = {this.handleTimeMediaUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer