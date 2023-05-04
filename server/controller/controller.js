import File from "../models/file.js"

export const uploadFile = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
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