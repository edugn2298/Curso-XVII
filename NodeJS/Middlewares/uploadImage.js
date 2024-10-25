import multer from "multer";

/**
 * @description This function is used to upload image to the server
 * @property {Object} destination - Destination of the image
 * @property {Object} filename - Name of the image
 * @property {Object} type - Type of the image
 * @property {Object} limits - Limits of the image
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname.replace(/\s/g, "_")}`);
  },
  type: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 10 },
});

/**
 * Allows to export the function
 */
export const upload = multer({ storage: storage });
