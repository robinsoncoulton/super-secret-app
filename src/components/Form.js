import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


require('../styles/components/form.css');

class Form extends React.Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = {classList: ''}
	// }

	render() {
		return(
			<div className='form-container'>
				<form className='form'>
					<input type='text' placeholder='name'/>
					<input type='text' placeholder='email address'/>
					<div className='form-group'>
						<div className='first-button'><FontAwesomeIcon icon='mars' /></div>
						<div className='second-button'><FontAwesomeIcon icon='venus' /></div>
					</div>
					<input className='submit-button' type='submit' value='sign up!' />
				</form>
			</div>	
		);
	}
}

export default Form;