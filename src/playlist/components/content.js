import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Playlist from './playlist';

class Content extends Component{
	render(){
		return (
			<div className = "Content">
			{
				this.props.data.categories.map( category => {
					return 	(
						<Playlist
							title       = {category.title}
							description = {category.description}
							list        = {category.playlist}
							key         = {category.id}
						/>
					)
				})
			}
			</div>
		)
	}
}

Content.propTypes = {
  data: PropTypes.object
}

export default Content;