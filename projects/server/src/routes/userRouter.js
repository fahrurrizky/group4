const router = require("express").Router();
const userController = require("../controllers");
const passwordValidator = require("../middleware/passwordValidator");


router.post("/login", userController.loginUser);
router.post("/create-cashier", passwordValidator, userController.createCashier);
router.delete("/delete-cashier/:id", userController.deleteCashier);
router.patch("/update-cashier/:id", userController.updateCashier);

module.exports = router