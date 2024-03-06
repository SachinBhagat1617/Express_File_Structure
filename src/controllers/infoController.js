const info=(req,res)=>{
    return res.json({
        success:"true",
        message:"API is live",
        error:{},
        date:{}

    })
}
module.exports={
    //info:info key value same so write once
    info
}
