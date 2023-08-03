const router = require("express").Router();
const {cartController} = require("../controllers");
const {verifyToken} = require("../middleware/verify");

router.post('/create', verifyToken, cartController.createCart);
router.patch('/remove', verifyToken, cartController.removeCartItem)
router.get('/all-list', verifyToken, cartController.getAllCartItems);
router.post('/checkout', verifyToken, cartController.checkout);

module.exports = router