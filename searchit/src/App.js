import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const particlesOption = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: false,
        value_area: 800
      }
    
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles 
        className='particles'
        params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

        {/*  <FaceRecognition/> } */}
      </div>
    );
  }
}

export default App;
