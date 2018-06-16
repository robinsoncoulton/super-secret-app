import React from 'react';
import '../styles/DisplayPicture.css'


class DisplayPicture extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='imgContainer'>
				<h1 className='username'>{this.props.username}</h1>
			</div>
		)
	}
}

export default DisplayPicture;