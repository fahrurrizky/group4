const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const User = db.User;
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const validator = require("validator");
const userController = {
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const checkLogin = await User.findOne({
        where: { username },
      });
      if (!checkLogin) {
        return res.status(400).json({ message: "User not found" });
      }
      if (checkLogin.password !== password) {
        return res.status(400).json({ message: "Wrong password" });
      }
      const token = jwt.sign({ id: checkLogin.id }, process.env.JWT_SECRET);
      return res.status(200).json({ message: "Login success:", token });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  createCashier: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const existingCashier = await User.findOne({
        where: { username },
      });
      if (existingCashier) {
        return res.status(400).json({ message: "Cashier already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const createCashier = await User.create({
        username,
        email,
        password: hashedPassword,
        role: "Cashier",
        isActive: true,
        imgProfile: null,
      });
      return res.status(200).json(createCashier);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  deleteCashier: async (req, res) => {
    try {
      const { id } = req.params;
      const cashier = await User.findOne({
        where: { id, role: "Cashier", isActive: true },
      });
      if (!cashier) {
        return res.status(400).json({ message: "Cashier not found" });
      }
      cashier.isActive = false;
      await cashier.save();
      return res.status(200).json({ message: "Cashier deleted" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  updateCashier: async (req, res) => {
    try {
      const { id } = req.params;
      const { username, email } = req.body;

      if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      const cashier = await User.findOne({
        where: { id, role: "Cashier", isActive: true },
      });
      if (!cashier) {
        return res.status(400).json({ message: "Cashier not found" });
      }
      cashier.username = username;
      cashier.email = email;
      await cashier.save();
      return res.status(200).json({ message: "Cashier updated" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
