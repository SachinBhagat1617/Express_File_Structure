// routers is an express class which will help us to create module
const express=require('express');
const v1routes=require('./v1'); // v1 ka router object import hua

const router=express.Router();

router.use('/v1',v1routes); // v1 pe redirect kia

module.exports=router;// export this router object