import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Media from './media.js';
import './playlist.css'
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';
import FullScreen from '../../icons/components/full-screen';

// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(this.props.data);
//     return (
//       <div className="Playlist">
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     )
//   }
// }

class Playlist extends Component{
	render() {
		const {title, description, list} = this.props // --- playlist
		return (
			<div className = "Playlist">
				<Play
				size= {20}
				color= "red"
				/>
				<Volume
				size= {20}
				color= "blue"
				/>
				<Pause
				size= {20}
				color= "green"
				/>
				<FullScreen
					size= {20}
					color= "yellow"
				/>

				<h3 className = "Playlist-description">{description}</h3>
				<h1 className = "Playlist-title">{title}</h1>
				<div className = "Playlist-scroller">
					{
						list.map( item => {
							return <Media
											title  = {item.title}
											author = {item.author}
											cover  = {item.cover}
											type   = {item.type}
											key    = {item.id}
										/>
						})
					}
				</div>
			</div>
		)
	}
}

Playlist.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
}
export default Playlist;