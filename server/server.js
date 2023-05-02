import routes from './routes/routes.js'
import express from 'express'
import cors from 'cors'
import ConnectDB from './DB/db.js'
const app=express()


app.use(cors())
app.use('/', routes);

ConnectDB()
var listner= app.listen(8080,()=>{
    console.log(`SERVER RUNNING AT ${listner.address().address} 8080` )
})