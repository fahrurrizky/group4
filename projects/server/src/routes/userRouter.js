const router = require("express").Router();
const {userController} = require("../controllers");
const passwordValidator = require("../middleware/passwordValidator");
const resetPassMid = require("../middleware/resetPassMid")


router.post("/login", userController.loginUser);
router.post("/create-cashier", passwordValidator, userController.createCashier);
router.patch("/delete-cashier", userController.deleteCashier);
router.patch("/update-cashier/:id", userController.updateCashier);
router.put("/forgot-password", userController.forgotPassword);
router.patch("/reset-password",resetPassMid, userController.resetPassword);


module.exports = router