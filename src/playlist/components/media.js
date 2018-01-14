import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './media.css'


class Media extends Component {

  state = {
    author: 'ErSulba'
  }
  handleClick = (event) => {
    this.setState({
      author: 'Tu mama :v'
    })
  }
  render() {
    return (
      <div className="Media" onClick={this.handleClick} >
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title"> {this.props.title}</h3>
          <p className="Media-author"> {this.props.author} </p>
        </div>
      </div>
    )
  }
}

Media.propTypes= {
  cover:PropTypes.string ,
  title: PropTypes.string ,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;