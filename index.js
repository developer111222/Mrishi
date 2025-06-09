const express = require('express');
const cors=require('cors');
const bd=require('./database/Db')
const app = express();
const apiroute=require('./router/apirouter');
const inrheightroute=require('./router/inrheightroute');
const accordroute=require('./router/accordroute');
const ppgreenroute=require('./router/ppgreenroute');

require('dotenv').config()


app.use(express.json());
app.use(cors());


bd()


const corsoptions = {
  origin: [
    'https://mrishimrcandeyenclave.com', 
    'https://inrheight.allindigi.com',
    'https://accord-psi-vert.vercel.app',
    'https://ppgreencity2.com'
],

    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    Headers: true,
   
     methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"], // Allow only specified HTTP methods
     allowedHeaders: [
       "Access-Control-Allow-Origin",
       "Content-Type",
       "Authorization",
       "cookies",
     ],
    //  credentials: true, // Allow sending cookies and other credentials
     optionsSuccessStatus: 200,
     preflightContinue: false,
}
//api route
app.use(cors(corsoptions));

app.use('/api',apiroute);
app.use('/api',inrheightroute);
app.use('/api',accordroute);
app.use('/api',ppgreenroute);

//server
const port=process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));``
