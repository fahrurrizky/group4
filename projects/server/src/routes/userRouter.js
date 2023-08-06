const router = require("express").Router();
const {userController} = require("../controllers");
const passwordValidator = require("../middleware/passwordValidator");
const resetPassMid = require("../middleware/resetPassMid")


router.post("/login", userController.loginUser);
router.post("/cashier", passwordValidator, userController.createCashier); // ini untuk create cashier
router.patch("/cashier", userController.deleteCashier); // ini untuk delete cashier
router.patch("/cashier/:id", userController.updateCashier); // ini untuk update cashier
router.put("/password", userController.forgotPassword); // ini untuk forgot password
router.patch("/password",resetPassMid, userController.resetPassword); // ini untuk reset password


module.exports = router