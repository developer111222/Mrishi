const express = require('express');
const Inrheight=require('../model/inrheightschema');

exports.apicontroller=async (req,res)=>{
    try{
const data=req.body;


if(!data){
    return res.status(400).json({message:'No data provided'});
}

const api=new Inrheight(data);
await api.save();

return res.status(201).json({message:'API created successfully',api});

    }catch(error){
        return res.status(500).json({message:error.message});
    }

}


//---------------------------get ----------------------

exports.getApis=async (req,res)=>{
    try{
        const apis=await Inrheight.find();
        return res.status(200).json({success:true,apis});
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
