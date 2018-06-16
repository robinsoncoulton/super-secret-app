import React from 'react';
import DisplayPicture from './DisplayPicture';
import AboutMe from './AboutMe';
import '../styles/Profile.css';


class Profile extends React.Component {
	render() {
		return (
			<div className="profile">
				<DisplayPicture username='Sam' />
				<AboutMe />
			</div>
		)
	}
}

export default Profile;
