const express = require('express');
const router=express.Router();
const {accordcontroller,getaccord}=require('../controller/accordcontroller');

router.route('/form').post(accordcontroller);
router.route('/get-db').get(getaccord);

module.exports=router;
