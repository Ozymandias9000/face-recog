import React from 'react';
import '../SignIn/SignIn.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			email: '',
			password: '',
			name: ''
		}
	}

	onNameChange = (e) => {
		this.setState({name: e.target.value});
	}

	onEmailChange = (e) => {
		this.setState({email: e.target.value});
	}
	
	onPasswordChange = (e) => {
		this.setState({password: e.target.value});
	}

onSubmitSignIn = () => {
	fetch('http://localhost:3000/register', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: this.state.email,
			name: this.state.name,
			password: this.state.password
		}) 
	})
		.then(res => res.json())
		.then(user => {
			if (user) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		});
	}

	render() {
		return (
			<div>
				<div className="login">
					<h1>Register</h1>
					<input 
				  	type="text" 
				  	placeholder="Name" 
				  	id="name"
				  	onChange={this.onNameChange} 
				  />  
				  <input 
				  	type="email" 
				  	placeholder="Email Address" 
				  	id="email"
				  	onChange={this.onEmailChange} 
				  />  
				  <input 
				  	type="password" 
				  	placeholder="Password" 
				  	id="password" 
				  	onChange={this.onPasswordChange}
				  />  
				  <input 
				  	type="submit" 
				  	onClick={ this.onSubmitSignIn }
				  	value="Register" 
				  />
				</div>
			</div>
		);
	}
};

export default Register;