import express from 'express'
const routes = express.Router()
import { uploadFile, downloadImg } from '../controller/controller.js'
import upload from '../middleware.js';
routes.post('/upload', upload.single('file'), uploadFile);
routes.get('/file/:fileId', downloadImg)

export default routes;