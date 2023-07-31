const db = require('../../models');
const User = db.User;
const fs = require('fs').promises;
const bcrypt = require("bcrypt");

const uploadImage = async (req, res) => {
    try {
        const { id } = req.body;
        const oldPic = await User.findOne({ where: { id } });

        if (oldPic.imgProfile) {
            await fs.unlink(oldPic.imgProfile, (err) => {
                if (err) return res.status(500).json({
                    message: "ada kesalahan",
                    error: err.message
                });
            });
        }

        await db.sequelize.transaction(async (t) => {
            const result = await User.update(
                { imgProfile: req.file.path },
                { where: { id } },
                { transaction: t }
            );
            return res.status(200).json({ message: "berhasil", result });
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    uploadImage
}