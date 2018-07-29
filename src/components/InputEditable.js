import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
require('../styles/components/InputEditable.css');

class InputEditable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.value,
			isDisabled: true
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		this.setState({...this.state, isDisabled: false});
	}

	handleBlur() {
		this.setState({...this.state, isDisabled: true});
	}

	handleChange(e) {
		this.setState({...this.state, value: e.target.value});
	}

	handleKeypress(e) {
		console.log(e.key);
		if (e.key === 'Enter') {
			e.target.blur();
		}
	}

	componentDidUpdate() {
		this.input.focus();
	}

	render(){
		return (
			<div className='input-edit-container'>
				<label className='input-edit-label'>{this.props.label}: </label>
				<input 
					className='profile-edit-input' 
					type='text' 
					value={this.state.value} 
					ref={(ip) => this.input = ip} 
					disabled={this.state.isDisabled}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
					onKeyPress={this.handleKeypress}/>
				<div 
					className='btn' 
					onClick={this.handleClick}>
					<FontAwesomeIcon icon='pen-square' />
				</div>
			</div>
		)
	}
}

export default InputEditable;