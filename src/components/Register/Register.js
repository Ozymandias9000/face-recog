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
	fetch('https://git.heroku.com/cryptic-ravine-28032.git/register', {
		method: 'post',
		headers: {'Content-Type': 'application/json',
							'Access-Control-Allow-Origin', '*'},
		body: JSON.stringify({
			email: this.state.email,
			name: this.state.name,
			password: this.state.password
		}) 
	})
		.then(res => res.json())
		.then(user => {
			if (user.id) {
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
					Name <br />
					<input 
				  	type="text" 
				  	placeholder="Name" 
				  	id="name"
				  	onChange={this.onNameChange} 
				  />  
				  <label>
				  Email <br />
				  <input 
				  	type="email" 
				  	placeholder="Email Address" 
				  	id="email"
				  	onChange={this.onEmailChange} 
			  	/>  
			  	</label>
			  	<label> 
		  		Password <br />
				  <input 
				  	type="password" 
				  	placeholder="Password" 
				  	id="password" 
				  	onChange={this.onPasswordChange}
				  />  
				  </label>
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