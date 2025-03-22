const express = require('express');
const router=express.Router();
const {accordcontroller,getaccord}=require('../controller/accordcontroller');

router.route('/acc-form').post(accordcontroller);
router.route('/acc-data').get(getaccord);

module.exports=router;
