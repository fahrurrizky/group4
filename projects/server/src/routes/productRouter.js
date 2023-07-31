const router = require("express").Router();
const {productController} = require("../controllers");
const multer = require("../middleware/multer");

router.get('/all-list', productController.getProductList);
router.post('/created',multer.single("productImg") ,productController.createdProduct);
// router.put('/update/:productId', productController.updateProduct);
// router.delete('/products/:id', productController.deactivateProduct);

// router.post('/categories', productController.addProductCategory);
// router.put('/categories/:id', productController.editProductCategory);
// router.delete('/categories/:id', productController.deleteProductCategory);

module.exports = router;