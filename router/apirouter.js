const express = require('express');
const router=express.Router();
const {apicontroller}=require('../controller/apicontrollert');

router.route('/orm').post(apicontroller)

module.exports=router;
