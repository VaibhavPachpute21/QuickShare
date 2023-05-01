import multer from 'multer'
import path from 'path'

// const upload=multer({dest:'uploads',
// })
let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/') ,
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
              cb(null, uniqueName)
    } ,
});

const upload =multer({ storage, limits:{ fileSize: 1000000 * 100 }, });

export default upload;