const express = require('express');
const router=express.Router();
const {apicontroller,getApis}=require('../controller/apicontrollert');

router.route('/orm').post(apicontroller);
router.route('/get-db').get(getApis);

module.exports=router;
