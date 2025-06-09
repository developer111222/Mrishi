const express = require('express');
const router=express.Router();
const {apicontroller,getApis}=require('../controller/ppgreencontroller');

router.route('/pp-form').post(apicontroller);
router.route('/pp-get-db').get(getApis);

module.exports=router;
