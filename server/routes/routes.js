import express from 'express'
const routes=express.Router()
import {uploadFile} from '../controller/controller.js'
import upload from '../middleware.js';
routes.post('/upload',upload.single('file') ,uploadFile);

export default routes;