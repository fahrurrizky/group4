const db = require('../../models');
const Product = db.Product;
const Category = db.Category;

const productController = {
getProductList: async (req, res) => {
    try {
        const productList = await Product.findAll({
        include: {
              model: Category,
              as: 'Category',
            },
          });
          return res.status(200).json(productList);
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      },

createdProduct: async (req, res) => {
    const { name, categoryId, harga_produk, quantity, description } = req.body;
  
    try {
      await db.sequelize.transaction(async (t) => {
        const productImg = req.file.filename;
        const result = await Product.create({
          name,
          categoryId,
          productImg,
          harga_produk,
          quantity,
          description
        }, { transaction: t });
        return res.status(200).json({ message: "Product created", result });
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

//   updateProduct: async (req, res) => {
//     const { id } = req.params;
//     const { name, categoryId, harga_produk, quantity, productImg, description } = req.body;

//     try {
//       const existingProduct = await Product.findByPk(id);
//       if (!existingProduct) {
//         return res.status(400).json({ message: "Product not found" });
//       }
//       const updatedProduct = {
//         name: name !== undefined ? name : existingProduct.name,
//         categoryId: categoryId !== undefined ? categoryId : existingProduct.categoryId,
//         harga_produk: harga_produk !== undefined ? harga_produk : existingProduct.harga_produk,
//         quantity: quantity !== undefined ? quantity : existingProduct.quantity,
//         productImg: productImg !== undefined ? productImg : existingProduct.productImg,
//         description: description !== undefined ? description : existingProduct.description,
//       };
//       await existingProduct.update(updatedProduct);
//       return res.status(200).json({ message: "Product updated", result: existingProduct });
//     } catch (error) {
//       return res.status(400).json({ message: error.message });
//     }
//   }


//   deactivateProduct: async (req, res) => {

//   },

//   addProductCategory: async (req, res) => {

//   },

//   editProductCategory: async (req, res) => {

//   },

//   deleteProductCategory: async (req, res) => {

//   },
};

module.exports = productController;