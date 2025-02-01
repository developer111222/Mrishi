const express = require('express');
const cors=require('cors');
const bd=require('./database/Db')
const app = express();
const apiroute=require('./router/apirouter');
require('dotenv').config()


app.use(express.json());
app.use(cors());


bd()


const corsoptions = {
    origin: 'https://mrishimrcandeyenclave.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various older browsers) choke on 204
    allowedHeaders: ['Content-Type', 'Authorization']
}
//api route
app.use(cors(corsoptions));

app.use('/api',apiroute);

//server
const port=process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));``