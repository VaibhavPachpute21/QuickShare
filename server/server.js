const express=require('express')
const app=express()



app.use('/', require('./routes'));


app.listen(8080,()=>{
    console.log('SERVER RUNNING AT 8080')
})