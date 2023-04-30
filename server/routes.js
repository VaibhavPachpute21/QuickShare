import express from 'express'
const routes=express.Router()
import {uploadFile} from './controller.js'

routes.post('/upload',uploadFile);

export default routes;