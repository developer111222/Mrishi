const express = require('express');
const Api=require('../model/apischema');

const apicontroller=async (req,res)=>{
    try{
const data=req.body;

console.log(req.body);
if(!data){
    return res.status(400).json({message:'No data provided'});
}

const api=new Api(data);
await api.save();

return res.status(201).json({message:'API created successfully',api});

    }catch(error){
        return res.status(500).json({message:error.message});
    }

}

module.exports={apicontroller};