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

  sendText () {
    let api_key = dab5bbc0;
    let api_secret = 7008ac711dd75f08;
    let to = 19739028359;        //can only send it to these numbers 19739028359, 15162366339, 16467449919 ... have to register more
    let from = 12028525488;
    let text = "Missing person: Sean Ho";

    axios.post(`https://rest.nexmo.com/sms/json?api_key=${api_key}&api_secret=${api_secret}&to=${to}&from=${from}&text=${text}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
