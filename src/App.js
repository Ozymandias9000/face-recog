import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    email: '',
    id: '',
    name: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  };

loadUser = (data) => {
  this.setState({user: {
    email: data.email,
    id: data.id,
    name: data.name,
    entries: data.entries,
    joined: data.joined
  }});
}

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box });
    console.log(box);
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://cryptic-ravine-28032.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.state.input
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res) {
        fetch('https://cryptic-ravine-28032.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(res => res.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
      }
      this.displayFaceBox(this.calculateFaceLocation(res))
    })
    .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    (route === 'signout') 
    ? this.setState(initialState)
    : ((route === 'home') 
      ? this.setState({isSignedIn: true})
      : false);
    this.setState({ route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <div className='navBar'>
          <Logo />
          <Navigation isSignedIn={ isSignedIn } onRouteChange={ this.onRouteChange }/>
        </div>
        { route ==='home'
          ? <div className='bodyContent'>
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm 
              onInputChange={this.onInputChange}
              onSubmit={ this.onSubmit }
              />
              <FaceRecognition box={ box } imageUrl={ imageUrl } />
            </div>
          : (
              this.state.route === 'signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange={ this.onRouteChange } /> 
              : <Register loadUser={this.loadUser} onRouteChange={ this.onRouteChange } />
            ) 
          } 
      {/*
        <Particles className='particles'
        params={particlesOptions} 
        /> 
      */}
      </div>
    );
  }
}

export default App;

// import Particles from 'react-particles-js';

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     }
//   }
// };
