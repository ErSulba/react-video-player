import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types';
import Media from './media.js';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    return (
      <div>
        {
          playlist.map( (item) => {
           return <Media {...item} key={item.id} />
          })
        }
        <Media> </Media>
      </div>
    )
  }
}

Playlist.propTypes= {
  data: PropTypes.array
}

export default Playlist