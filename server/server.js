import routes from './routes/routes.js'
import express from 'express'
import cors from 'cors'
import ConnectDB from './DB/db.js'
const app=express()


app.use(cors())
app.use('/', routes);

ConnectDB()
app.listen(8080,()=>{
    console.log('SERVER RUNNING AT 8080')
})