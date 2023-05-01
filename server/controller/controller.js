import File from "../models/file.js"

export const uploadFile= async (request,response) =>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname
    }
    try {
        const file =await File.create(fileObj)
        console.log(request)
        response.status(200).json({path:`http://loacalhost:8080/files/${file._id}`})
    } catch (error) {
     console.error(error)   
    }
}