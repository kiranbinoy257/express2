//create index.html

const express=require("express");
const path=require('path')
const PORT=3000
const app=express()
app.use(express.static('static'))
app.post('/',(req,res)=>{
    console.log(req.method);
    res.send(path.join(__dirname,'static','index.html'))
})

app.listen(PORT,()=>{
    console.log("server started");
})
