const db = require('../../models');
const Product = db.Product;
const Category = db.Category;
const { Op } = require('sequelize')
const fs = require('fs').promises
const productController = {
  getProductList: async (req, res) => {
    const { name, harga_produk, categoryId, orderBy, page = 1, limit = 10 } = req.query;
    const orderDirection = orderBy === 'name_asc' || orderBy === 'harga_produk_asc' ? 'ASC' : 'DESC';
    const offset = (page - 1) * limit;
  
    try {
      const whereClause = {};
      if (name) {
        whereClause.name = { [Op.like]: `%${name}%` };
      }
      if (categoryId) {
        whereClause.categoryId = categoryId;
      }
      if (harga_produk) {
        // Assuming 'harga_produk' is stored as a numeric field in the database
        whereClause.harga_produk = { [Op.gte]: parseFloat(harga_produk) };
      }
  
      const order = [];
      if (orderBy === 'name_asc' || orderBy === 'name_desc') {
        order.push(['name', orderDirection]);
      } else if (orderBy === 'harga_produk_asc' || orderBy === 'harga_produk_desc') {
        order.push(['harga_produk', orderDirection]);
      } else {
        // Default sorting when no valid orderBy parameter is provided
        order.push(['createdAt', 'DESC']);
      }
  
      const productList = await Product.findAll({
        where: whereClause,
        include: {
          model: Category,
          as: 'Category',
        },
        order,
        limit,
        offset,
      });
  
      return res.status(200).json({ page, limit, productList });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
    

createdProduct: async (req, res) => {
    const { name, categoryId, harga_produk, quantity, description } = req.body;
  
    try {
      await db.sequelize.transaction(async (t) => {
        const productImg = req.file.path;
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

  updateProduct: async (req, res) => {
    try{ const {
      name,
      categoryId,
      harga_produk,
      quantity,
      description,
    } =req.body;
    const item = await Product.findOne({
      where: { id: req.params.id },
    })
    const updateClause = {};
    if (name) { updateClause.name = name;}
    if (categoryId) {updateClause.categoryId = categoryId;}
    if(req.file && req.file.filename ) 
    { await fs.unlink (item.productImg, (err) => {
        if (err) {return res.status(500).json({
          message: "Something went wrong",
          error: err.message
        });
        }
        updateClause.productImg = req.file.path;
      })
    }
    if (harga_produk) {updateClause.harga_produk = harga_produk;}
    if (quantity) {updateClause.quantity = quantity;}
    if (description) {updateClause.description = description;}
    console.log("ok");
    await db.sequelize.transaction(async (t) => {
      const result = await item.update(updateClause, { transaction: t,});
      return res.status(200).json({ message: "Product updated", result, updateClause });
    })
  
  }catch (error) {
    console.log(error)
      return res.status(400).json({ message: error.message });
    }
  },

  deactivateProduct: async (req, res) => {
    const { id } = req.body;
    try {
      await db.sequelize.transaction(async (t) => {
        const changeStatus = await Product.update(
          { isActive: false },
          { where: { id }, transaction: t }
        );
          return res.status(200).json({ message: "Product is deactivated" });
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }},

    addProductCategory: async (req, res) => {
      const { name } = req.body; 
      try {
        const adaCategory = await Category.findOne({
          where: {
            name
          }
        });
        if (adaCategory) {
          return res.status(400).json({ message: "Product category already exists" });
        }
        const newCategory = await Category.create({ name });
        return res.status(200).json({ message: "Product category added", category: newCategory });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    },

    editProductCategory: async (req, res) => {
      const { id } = req.params;
      const { name } = req.body;
    
      try {
        const existingCategory = await Category.findByPk(id);
        if (!existingCategory) {
          return res.status(404).json({ message: "Product category not found" });
        }
    
        await existingCategory.update({ name });
        return res.status(200).json({ message: "Product category updated", category: existingCategory });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    },
    
    deleteProductCategory: async (req, res) => {
      const { id } = req.body;
    
      try {
        const existingCategory = await Category.findByPk(id);
        if (!existingCategory) {
          return res.status(404).json({ message: "Product category not found" });
        }
    
        await existingCategory.destroy();
        return res.status(200).json({ message: "Product category deleted" });
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    },

    getCategory: async (req, res) => {
      try {
        const result = await Category.findAll();
        return res.status(200).json({ message: "success", result });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }
};

module.exports = productController;