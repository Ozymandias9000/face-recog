import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (e) => {
		this.setState({signInEmail: e.target.value});
	}
	
	onPasswordChange = (e) => {
		this.setState({signInPassword: e.target.value});
	}

onSubmitSignIn = () => {
	fetch('https://git.heroku.com/cryptic-ravine-28032.git/signin', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: this.state.signInEmail,
			password: this.state.signInPassword
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
		const { onRouteChange } = this.props;
		return (
			<div>
				<div className="login">
					<h1>Sign In</h1>
					<label>
						Email
						<br />
				    <input 
				    	type="email" 
				    	placeholder="Email Address" 
				    	id="email"
				    	name='email'
				    	onChange={ this.onEmailChange } 
				    />
			    </label>
			  	<label> 
			  		Password 	  
				  	<input 
					  	type="password" 
					  	placeholder="Password" 
					  	name='password'
					  	id="password" 
					  	onChange={ this.onPasswordChange }
					  />
			  	</label>  
			  	<a href="" 
				  	className="forgot">
				  	forgot password?
				  </a>
				  <input 
				  	type="submit" 
				  	onClick={ this.onSubmitSignIn }
				  	value="Sign In" 
				  />
				  <button 
				  	onClick={() => onRouteChange('register')} 
				  	value="Register">
				  	Register
				  </button>
				</div>
			</div>
		);
	}
}

export default SignIn;