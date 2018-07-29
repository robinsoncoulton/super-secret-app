import React from 'react';
import InputEditable from '../components/InputEditable';
import ImageUpload from '../components/ImageUpload';

require('../styles/pages/Profile.css');



class Profile extends React.Component {
	constructor(props) {
		super(props);
	}





	render(){
		return(
			<div>
				<ImageUpload />
				<InputEditable label='Email' value='lorenzo@aperolspritz.com'/>
			</div>
		)
	}
}

export default Profile;