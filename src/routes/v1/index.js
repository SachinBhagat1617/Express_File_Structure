const express=require('express');

const router=express.Router();
const {InfoController}=require('../../controllers/index')
// router.get('/info', (req,res)=>{
//     return res.json({msg:"ok"})
// });
// (req,res)=>{
//     //     return res.json({msg:"ok"})
//     // }); --> this is a controller no we have to segrate this also

router.get('/info',InfoController.info)

module.exports=router