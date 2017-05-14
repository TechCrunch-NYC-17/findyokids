import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: null,
      side: null
    }
  }

  componentDidMount() {
    axios.get('/images')
      .then((data) => {
        this.setState( 
          {
          front: data.data.front,
          side: data.data.side
        })
      })
  }

  images() {
    if(this.state.front === null && this.state.side === null) {
      return (
        <div>Loading</div>
      )
    }
    return this.state.front.map((val) => {
      axios.post('/clarifai', {front:val} )
           .then((response) => {
             console.log("RESSSSPONSE:", response);
           })
      return (
        <div>
          <img width='400' height='400' src={'/front/' + val} /> 
        </div>
      )
    });
  }
  
  
  render() {  
    return (
      <div>
        <center>
        <img src={this.state.pic} height="500" width="500" />
        </center>
      </div>
    )
  }
}

export default App
