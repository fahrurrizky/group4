const bcrypt = require("bcrypt");
const db = require("../../models");
const jwt = require("jsonwebtoken");
const User = db.User;
const path = require("path");
const { validationResult } = require("express-validator");
const fs = require("fs");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const generateToken= (user) => {
    const payload= {
        id: user.id,
        role: user.role
    };
    const options = {
        expiresIn: "1h",
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

const userController = {
    loginUser: async (req, res) => {
        try {
            const { username, password } = req.body;
            const checkLogin = await User.findOne({
               where: {username},
            });
            if (!checkLogin) {
                return res.status(400).json({ message: "User not found" });
            }
            const comparePassword = await bcrypt.compare(password, checkLogin.password);
            if (!comparePassword) {
                return res.status(400).json({ message: "Wrong password" });
            }

            const token = generateToken(checkLogin);
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
            const { id } = req.body;
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
            const { currentUsername, currentEmail, newUsername, newEmail } = req.body;

            if (!currentUsername || !currentEmail || !newUsername || !newEmail) {
                return res.status(400).json({ message: "All fields are required" });
            }

            if (!validator.isEmail(newEmail)) {
                return res.status(400).json({ message: "Invalid email format" });
            }
            const cashier = await User.findOne({
                where: { id, username: currentUsername, email: currentEmail, role: "Cashier", isActive: true },
            });
            if (!cashier) {
                return res.status(400).json({ message: "Cashier not found" });
            }
            cashier.username = newUsername;
            cashier.email = newEmail;
            await cashier.save();
            return res.status(200).json({ message: "Cashier updated" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    forgotPassword: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email } = req.body;
        try {
            const token = await sendResetEmail(email);
            await sendEmail(email, token);
            return res.status(200).json({ message: "Reset password email sent" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    resetPassword: async (req, res) => {
        const token = req.headers.authorization?.split(" ")[1];
        const { password } = req.body;
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findOne({
                where: { id: decodedToken.id },
            });
            if (!user) {
                return res.status(400).json({ message: "User not found" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
            await user.save();
            return res.status(200).json({ message: "Password updated" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },
};

async function sendEmail(email, token) {
    const templatePath = path.resolve(__dirname, "../emails/forgotPassword.html");
    const templateContent = await fs.promises.readFile(templatePath, "utf-8");
    const html = templateContent.replace("{{redirect}}", `http://localhost:8000/reset-password/${token}`);

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Reset Password",
        html: html,
    });
}

async function sendResetEmail(email) {
    const user = await User.findOne({
        where: { email: email },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}

module.exports = userController;
