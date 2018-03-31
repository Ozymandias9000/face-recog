import React from 'react';
import '../SignIn/SignIn.css';

const Register = ({ onRouteChange }) => {
	return (
		<div>
			<div className="login">
				<h1>Register</h1>
		    <input type="text" placeholder="Username" id="username" />  
			  <input type="email" placeholder="Email" id="email" />  
			  <input type="password" placeholder="Password" id="password" />  
			  
			  <input 
			  	type="submit" 
			  	onClick={() => onRouteChange('home') }
			  	value="Register" />
			</div>
		</div>
	);
};

export default Register;