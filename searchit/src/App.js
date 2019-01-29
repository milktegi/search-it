import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3c37a4ac169b4c5f837b1a572be63bdd'
});

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
  state = {
    input: '',
    imageUrl: '',
    boxes: [
      {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    ]
  };

  calculateFaceLoc = data => {
    // 배열로 전환
    return data.outputs[0].data.regions.map(face => {
      const detection = face.region_info.bounding_box;

      // dom manupulation
      // 돔에 직접적으로 접근
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      console.log(width, height);
      // box의 값을 리턴
      return {
        leftCol: detection.left_col * width,
        topRow: detection.top_row * height,
        rightCol: width - detection.right_col * width,
        bottomRow: height - detection.bottom_row * height
      };
    });

  };

  renderDetectBox = boxes => {
    console.log(boxes);
    this.setState({ boxes: boxes });
  };

  onInputChange = e => {
    // console.log(e.target.value);
    this.setState({
      input: e.target.value
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    });
    console.log('click');
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.renderDetectBox(this.calculateFaceLoc(response)))
      .catch(err => console.log(err));
  };

  render() {
    const { onInputChange, onButtonSubmit } = this;

    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onButtonSubmit={onButtonSubmit}
          onInputChange={onInputChange}
        />

        <FaceRecognition
          box={this.state.boxes}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

export default App;
