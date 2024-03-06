const express=require('express')
const {PORT}=require('./config')
const app=express();

const apiRoutes=require('./routes'); // importing modules from routes ka index.js

//app.use ->which is to be applied everyWhere // and redirects the path
// will mount /api every on apiRotes object
app.use('/api',apiRoutes);

//https:localhost:3000/api(written in dex file) / ... writen in router where to go
// https:localhost:3000/api/v1/info  where info is the controller

app.listen(PORT,()=>{
    console.log(`Successfully started server on POrt: ${PORT}`);
})