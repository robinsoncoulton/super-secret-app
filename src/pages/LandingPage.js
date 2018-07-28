import React from 'react';
import Form from '../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

require('../styles/pages/landingPage.css');

const LandingPage = () => (
  <div className='landingPage'>
  	<div className='banner'>
    	<h1>Dinter</h1>
    	<Form />
			<FontAwesomeIcon icon="heart" />
			<FontAwesomeIcon icon="heart" />
    	<FontAwesomeIcon icon="heart" />
	</div>
  </div>
);

export default LandingPage;