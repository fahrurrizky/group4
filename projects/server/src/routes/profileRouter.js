const router = require("express").Router();
const {profileController} = require("../controllers")
const multer = require("../middleware/multer");
const {verifyToken} = require("../middleware/verify");

router.post("/upload-img", verifyToken, multer.single("imgProfile"), profileController.uploadImage);

module.exports = router