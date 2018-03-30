import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
    }
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(
      function(res) {
        console.log(res.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        
      }
    );
  }

  render() {
    return (
      <div className="App">

      {/*
        <Particles className='particles'
        params={particlesOptions} 
        /> 
      */}

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onSubmit={ this.onSubmit }
        />
        <FaceRecognition imageUrl={ this.state.imageUrl } />
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
