const express = require('express');
const router = require('express').Router();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const morgan = require('morgan');
const Clarifai = require('clarifai');
var async = require('async');

const app = express();


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client')));

app.set('view engine', 'ejs');


const front = [
'https://image.ibb.co/iC9385/IMG_5762.jpg',
'https://image.ibb.co/fD4gvk/IMG_5760.jpg',
'https://image.ibb.co/iwsC1Q/IMG_5761.jpg',
'https://image.ibb.co/fL0Mvk/IMG_5759.jpg',
'https://image.ibb.co/f32qo5/IMG_5758.jpg',
'https://image.ibb.co/hM9s1Q/IMG_5757.jpg',
'https://image.ibb.co/kdVbT5/IMG_5756.jpg',
'https://image.ibb.co/bXcegQ/IMG_5755.jpg',
'https://image.ibb.co/nvzQMQ/IMG_5754.jpg',
'https://image.ibb.co/d8z385/IMG_5753.jpg',
'https://image.ibb.co/hNqX1Q/IMG_5752.jpg',
'https://image.ibb.co/iztkMQ/IMG_5751.jpg',
'https://image.ibb.co/c3AAo5/IMG_5750.jpg',
'https://image.ibb.co/hRTKgQ/IMG_5749.jpg',
'https://image.ibb.co/nBCegQ/IMG_5748.jpg',
'https://image.ibb.co/c1negQ/IMG_5747.jpg',
'https://image.ibb.co/dmJ8ak/IMG_5746.jpg',
'https://image.ibb.co/cV6uFk/IMG_5745.jpg',
'https://image.ibb.co/hNXC1Q/IMG_5744.jpg',
'https://image.ibb.co/nbPgvk/IMG_5743.jpg',
'https://image.ibb.co/d6Nqo5/IMG_5742.jpg',
'https://image.ibb.co/gvMi85/IMG_5741.jpg',
'https://image.ibb.co/e6YwT5/IMG_5740.jpg',
'https://image.ibb.co/bPjQMQ/IMG_5739.jpg',
'https://image.ibb.co/ckG5MQ/IMG_5738.jpg',
'https://image.ibb.co/nedwT5/IMG_5737.jpg',
'https://image.ibb.co/mrZs1Q/IMG_5736.jpg',
'https://image.ibb.co/fAWuFk/IMG_5735.jpg',
'https://image.ibb.co/eWAoak/IMG_5734.jpg',
'https://image.ibb.co/kHqX1Q/IMG_5733.jpg',
'https://image.ibb.co/gHsO85/IMG_5732.jpg',
'https://image.ibb.co/hvguFk/IMG_5731.jpg',
'https://image.ibb.co/dA4385/IMG_5730.jpg',
'https://image.ibb.co/hddkMQ/IMG_5729.jpg',
'https://image.ibb.co/hcrTak/IMG_5728.jpg',
'https://image.ibb.co/ic2ZFk/IMG_5727.jpg',
'https://image.ibb.co/c4hZFk/IMG_5726.jpg',
'https://image.ibb.co/h4sqo5/IMG_5725.jpg',
'https://image.ibb.co/iCXC1Q/IMG_5724.jpg',
'https://image.ibb.co/dogTak/IMG_5723.jpg',
'https://image.ibb.co/dJhO85/IMG_5722.jpg',
'https://image.ibb.co/gN7C1Q/IMG_5721.jpg',
'https://image.ibb.co/imDVo5/IMG_5720.jpg',
'https://image.ibb.co/bCw5MQ/IMG_5719.jpg',
'https://image.ibb.co/db2O85/IMG_5718.jpg',
'https://image.ibb.co/hqus1Q/IMG_5717.jpg',
'https://image.ibb.co/n5U385/IMG_5716.jpg',
'https://image.ibb.co/fFzQMQ/IMG_5715.jpg',
'https://image.ibb.co/invAo5/IMG_5714.jpg',
'https://image.ibb.co/jZAMvk/IMG_5713.jpg',
'https://image.ibb.co/hEWi85/IMG_5712.jpg',
'https://image.ibb.co/daBTak/IMG_5711.jpg',
'https://image.ibb.co/gQ8kMQ/IMG_5710.jpg',
'https://image.ibb.co/hJNC1Q/IMG_5709.jpg',
'https://image.ibb.co/nAx6T5/IMG_5707.jpg',
'https://image.ibb.co/kUsJak/IMG_5706.jpg',
'https://image.ibb.co/c6YPFk/IMG_5705.jpg',
'https://image.ibb.co/fKgBvk/IMG_5704.jpg',
'https://image.ibb.co/mhzLo5/IMG_5703.jpg',
'https://image.ibb.co/fH9aMQ/IMG_5702.jpg',
'https://image.ibb.co/nCG0o5/IMG_5701.jpg',
'https://image.ibb.co/dwwN1Q/IMG_5700.jpg',
'https://image.ibb.co/gVN6T5/IMG_5699.jpg'
]


var clarifaiApp = new Clarifai.App('sJLLnP9zyFTOBtjItyVfpqYlOE2kIo3NUN_xetmv', 'ZitJzM0PkSo6e1UHTl1tEsvj2a-qBpZn_7CrKOoO');

clarifaiApp.getToken();

router.post('/sendFrame',(req,res) => {
 
   clarifaiApp.inputs.search({ input: {url: 'http://i64.tinypic.com/r1y39t.jpg'} }).then(
    function(response) {
    	const date = new Date(Date.now()).toLocaleDateString();
    	const time = new Date(Date.now()).toLocaleTimeString();
    	console.log("DIS THE DATE AND TIME AND TIME", date, time)
      console.log("RESPONSEEEEE:", response.hits[0].input);

      if(response.hits[0].score > 0.79) {
      	console.log('ya bish')
      	res.send('sean has been found!')
      } else {
      	console.log('noooooo')
      	res.send("no sean here...");
      }

    },
    function(err) {

    	console.log("ERRORRRR:", err)
      // there was an error
    }
  );
	
})

app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});


module.exports = app;




// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(express.static(path.join(__dirname, '/../client/')));
// app.use(express.static(path.join(__dirname, '/../node_modules')));
// app.use(bodyParser.json());

// const port = process.env.PORT || 5000;

// app.listen(port, (err) => {
//   if(err) {
//     console.log('Error occurred : ', err);
//   }
//   console.log('Server is listening to port : ', port);
// });
