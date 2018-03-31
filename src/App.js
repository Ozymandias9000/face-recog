import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a5a53cb78979422d849ad773ed67c4af',
});

class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(clarifaiFace);
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
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(res => this.displayFaceBox(this.calculateFaceLocation(res)))
    .catch(err => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route });
  };

  render() {
    return (
      <div className="App">

      {/*
        <Particles className='particles'
        params={particlesOptions} 
        /> 
      */}

        <Navigation onRouteChange={ this.onRouteChange }/>
        { this.state.route ==='home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm 
              onInputChange={this.onInputChange}
              onSubmit={ this.onSubmit }
              />
              <FaceRecognition box={this.state.box} imageUrl={ this.state.imageUrl } />
            </div>
          : (
              this.state.route === 'signin'
              ? <SignIn onRouteChange={ this.onRouteChange }/> 
              : <Register onRouteChange={ this.onRouteChange }/>
            ) 
          }
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
