import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './icons8-brain-50.png'

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 50, width: 50 }} >
		 		<div className="Tilt-inner"> <img src={brain} alt='logo' /></div>
			</Tilt>
		</div>
	);
};

export default Logo;