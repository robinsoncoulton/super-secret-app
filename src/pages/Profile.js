import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

require('../styles/pages/Profile.css');



class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'ilovespaghetti@fiat500.org',
			isDisabled: true
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}



	handleClick() {
		this.setState({...this.state, isDisabled: false});
	}

	handleBlur() {
		this.setState({...this.state, isDisabled: true});
	}

	componentDidUpdate() {
		this.input.focus();
	}

	render(){
		return(
			<div>
				<div className='profile-edit-section'>
					<label className='profile-edit-label'>Email: </label>
					<input 
						className='profile-edit-input' 
						type='text' 
						value={this.state.value} 
						ref={(ip) => this.input = ip} 
						disabled={this.state.isDisabled}
						onBlur={this.handleBlur}/>
					<div 
						className='btn' 
						onClick={this.handleClick}>
						<FontAwesomeIcon icon='pen-square' />
					</div>
				</div>
			</div>
		)
	}
}

export default Profile;