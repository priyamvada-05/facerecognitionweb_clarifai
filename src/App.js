import React,{Component} from 'react';
import './App.css';
import Navigation from './container/Navigation/Navigation';
import FaceReadingPath from './container/FaceReadingPath/FaceReadingPath';
import Content from './container/Content/Content';
import WebcamCapture from './container/Camera/WebcamCapture';
import Particles from 'react-particles-js';
import {Particle_constant} from './Particle_constant';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
 apiKey: 'dd68fd5b94cb4f729dd72c1f1382e609'
});



class App extends Component{

  constructor(){
    super()
    this.state={
      image_url:'',
      Array_box:[],
      wide:0,
      heigh:0
    }
  }

  faceDetectionBox=(data)=>{
    const face_box_coordinate_array=data.outputs[0].data.regions;
    const img=document.getElementById('image');
    const width=img.width;
    const height=img.height;
    return({'face_box_coordinate_array': face_box_coordinate_array,
              width:width,
              height:height
           })
  }

  OnTextEnter=(event)=>{
    this.setState({ image_url: event.target.value })
  }

  OnDetect=(event)=>{
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.image_url)
    .then(response =>  this.faceDetectionBox(response))
    .then(obj=> this.setState({Array_box:obj.face_box_coordinate_array,
                               wide:obj.width,
                               heigh:obj.height
                              }))
    .catch(err=> console.log(err)  );
  }


  render(){
  return (
    <div className="App">
        <Particles className='particle' params={Particle_constant} />
        <Navigation />
        <FaceReadingPath OnDetect={this.OnDetect} OnTextEnter={this.OnTextEnter} />
        <Content coordinate={this.state.Array_box} img_path={this.state.image_url} wide={this.state.wide} heigh={this.state.heigh}/> 
        <WebcamCapture />
    </div>
  );
}
}

export default App;
