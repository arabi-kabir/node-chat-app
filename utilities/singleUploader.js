const { path } = require("express/lib/application");
const createError = require("http-errors");
const multer = require("multer");

function uploader(
    subfolder_path,
    allowed_file_type,
    max_file_size,
    error_msg
) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`

    const storage = multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, UPLOADS_FOLDER)
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname)
            const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
            cb(null, fileName + fileExt) 
        }
    })

    const upload = multer({
        storage: storage,
        limits: {
            fileSize: max_file_size
        },
        fileFilter: (req, res, cb) => {
            if(allowed_file_type.includes(file.mimetype)) {
                cb(null, true)
            } else {
                cb(createError(error_msg));
            }
        }
    })

    return upload;
}

module.exports = uploader