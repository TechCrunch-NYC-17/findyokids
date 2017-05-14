import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';


// const side = [
// 'https://image.ibb.co/joCy85/IMG_5627.jpg',
// 'https://image.ibb.co/nFzOak/IMG_5626.jpg',
// 'https://image.ibb.co/coSn1Q/IMG_5625.jpg',
// 'https://image.ibb.co/eqNbvk/IMG_5624.jpg',
// 'https://image.ibb.co/i3brT5/IMG_5623.jpg',
// 'https://image.ibb.co/bxSbvk/IMG_5622.jpg',
// 'https://image.ibb.co/hzKZgQ/IMG_5621.jpg',
// 'https://image.ibb.co/kKAJ85/IMG_5620.jpg',
// 'https://image.ibb.co/cw571Q/IMG_5619.jpg',
// 'https://image.ibb.co/iapBT5/IMG_5618.jpg',
// 'https://image.ibb.co/bGV71Q/IMG_5598.jpg',
// 'https://image.ibb.co/bzXbvk/IMG_5597.jpg',
// 'https://image.ibb.co/jTwmvk/IMG_5596.jpg',
// 'https://image.ibb.co/dmvPgQ/IMG_5595.jpg',
// 'https://image.ibb.co/n1hRvk/IMG_5594.jpg',
// 'https://image.ibb.co/cDWx1Q/IMG_5593.jpg',
// 'https://image.ibb.co/mMa1T5/IMG_5592.jpg',
// 'https://image.ibb.co/cSPH1Q/IMG_5591.jpg',
// 'https://image.ibb.co/kGXRvk/IMG_5590.jpg',
// 'https://image.ibb.co/doEH1Q/IMG_5589.jpg',
// 'https://image.ibb.co/fNic1Q/IMG_5588.jpg',
// 'https://image.ibb.co/na5PgQ/IMG_5577.jpg',
// 'https://image.ibb.co/hXxRvk/IMG_5576.jpg',
// 'https://image.ibb.co/h0KH1Q/IMG_5575.jpg',
// 'https://image.ibb.co/dkvDak/IMG_5574.jpg',
// 'https://image.ibb.co/fZu6vk/IMG_5573.jpg',
// 'https://image.ibb.co/e8FDak/IMG_5572.jpg',
// 'https://image.ibb.co/jG7Rvk/IMG_5571.jpg',
// 'https://image.ibb.co/k9Ntak/IMG_5570.jpg',
// 'https://image.ibb.co/fO6x1Q/IMG_5569.jpg',
// 'https://image.ibb.co/c9aeFk/IMG_5568.jpg',
// 'https://image.ibb.co/fMhRvk/IMG_5567.jpg',
// 'https://image.ibb.co/efdc1Q/IMG_5566.jpg',
// 'https://image.ibb.co/gykeFk/IMG_5565.jpg',
// 'https://image.ibb.co/ffpjgQ/IMG_5564.jpg',
// 'https://image.ibb.co/cgZH1Q/IMG_5562.jpg',
// 'https://image.ibb.co/gveT85/IMG_5563.jpg'].reverse();


class App extends Component {

constructor(props) {
    super(props);

    this.state= {
      pic: side[0],
      value: 0
    }

  }


  componentWillMount() {
    console.log("This is the particular instance:", this.state.pic);
    const _this = this;
    let count = 1;

    setInterval(function(){
      _this.setState({
        pic: side[count]
      })
      count++
    },100)
   
  }

  // sideImages() {
  //   for(let i = 562; i < 633; i++) {
  //   console.log('./images/side/IMG_5' + i + '.jpg');
  //     return (
  //       <div>
  //         <img src={require('./images/side/IMG_5' + i + '.jpg')} alt='#'/>
  //       </div>
  //     )
  //   }
  // }

  handlePhotoUpdate(pic) {

   
   

  }

// <Slider {...settings}>
//           <div style>{this.sideImages()}</div>
//         </Slider>
  
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