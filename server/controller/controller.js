import { response } from "express"
import File from "../models/file.js"

export const uploadFile = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
        type: request.file.mimetype,
        size: request.file.size
    }
    try {
        const file = await File.create(fileObj)
        console.log(request)
        //http://127.0.0.1:8080/file/${file._id}
        response.status(200).json({ path: `${file._id}` })
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: error.message })
    }
}

export const downloadImg = async (request, response) => {

    try {
        const file = await File.findById(request.params.fileId)
        file.downloadContent++;
        await file.save();
        response.download(file.path, file.name)
    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: error.message })
    }
}

export const getImgInfo = async (request, response) => {
    try {
        const file = await File.findById(request.params.fileId)
        if (file) {
            response.status(200).json({ path: file.path, name: file.name, type: file.type, size: file.size })
        }else{
            response.status(404).json({error:"File Not Found" })

        }

    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: error.message })
    }

}