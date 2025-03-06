const express = require('express');
const router=express.Router();
const {apicontroller,getApis}=require('../controller/inrheightcontroller');

router.route('/form').post(apicontroller);
router.route('/get-db').get(getApis);

module.exports=router;
