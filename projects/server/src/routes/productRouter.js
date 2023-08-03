const router = require("express").Router();
const {productController} = require("../controllers");
const multer = require("../middleware/multer");


router.get('/all-list', productController.getProductList);
router.post('/created',multer.single("productImg") ,productController.createdProduct);
router.patch('/delete', productController.deactivateProduct);
router.patch('/update/:id', multer.single("productImg") ,productController.updateProduct);
router.post('/add-category', productController.addProductCategory);
router.put('/edit-category/:id', productController.editProductCategory);
router.delete('/delete-category', productController.deleteProductCategory);
router.get('/all-categories', productController.getCategory);


module.exports = router;