const express = require('express');
const cors=require('cors');
const bd=require('./database/Db')
const app = express();
const apiroute=require('./router/apirouter');
const inrheightroute=require('./router/inrheightroute');
require('dotenv').config()


app.use(express.json());
app.use(cors());


bd()


const corsoptions = {
    origin: ['https://mrishimrcandeyenclave.com', 'https://mrishimrcandeyenclave.com/'],
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

//server
const port=process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));``
