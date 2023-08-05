const router = require("express").Router();
const {productController} = require("../controllers");
const multer = require("../middleware/multer");


router.get('/all', productController.getProductList); // ini untuk get all cart
router.post('/cart',multer.single("productImg") ,productController.createdProduct); // ini untuk create cart
router.patch('/cart/:id', productController.deactivateProduct); // ini untuk delete cart
router.patch('/carti/:id', multer.single("productImg") ,productController.updateProduct); // ini untuk update cart
router.put('/category/:id', productController.editProductCategory); // ini untuk edit category
router.delete('/category/:id', productController.deleteProductCategory); // ini untuk delete category
router.post('/category', productController.addProductCategory); // ini untuk add category
router.get('/categories', productController.getCategory); // ini untuk get all category


module.exports = router;