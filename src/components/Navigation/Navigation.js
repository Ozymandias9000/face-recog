import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<nav>
					<p onClick={() => onRouteChange('signout') } className='signOut'>Sign Out</p>
				</nav>
				)
		} else { 
			return (
				<nav>
					<p onClick={() => onRouteChange('signin') } className='signIn'>Sign In</p>
					<p onClick={() => onRouteChange('register') } className='signOut'>Register</p>
				</nav>
				)
		}
};

export default Navigation;