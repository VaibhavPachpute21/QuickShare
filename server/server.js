import routes from './routes.js'
import express from 'express'
import cors from 'cors'
const app=express()


app.use(cors())
app.use('/', routes);


app.listen(8080,()=>{
    console.log('SERVER RUNNING AT 8080')
})