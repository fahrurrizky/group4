const router = require("express").Router();
const {profileController} = require("../controllers")
const multer = require("../middleware/multer");

router.post("/upload-img", multer.single("imgProfile"), profileController.uploadImage);

module.exports = router