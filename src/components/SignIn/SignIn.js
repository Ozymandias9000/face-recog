import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
	return (
		<div>
			<div className="login">
				<h1>Sign In</h1>
		    <input type="text" placeholder="Username" id="username" />  
			  <input type="password" placeholder="Password" id="password" />  
			  <a href="" className="forgot">forgot password?</a>
			  <input 
			  	type="submit" 
			  	onClick={() => onRouteChange('home') }
			  	value="Sign In" />
			  <button onClick={() => onRouteChange('register')} value="Register">Register</button>
			</div>
		</div>
	);
};

export default SignIn;