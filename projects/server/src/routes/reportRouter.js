const router = require("express").Router();
const {reportController} = require("../controllers");
const {verifyToken} = require("../middleware/verify");

router.get('/daily', reportController.getDaily);
router.get('/sold',  reportController.getProductSold);

module.exports = router