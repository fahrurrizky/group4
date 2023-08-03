const db = require('../../models');
const User = db.User;
const fs = require('fs').promises;

const uploadImage = async (req, res) => {
    try {
        const userId = req.user.id;
        const oldPic = await User.findOne({ where: { id: userId } });
        if (oldPic.imgProfile) {
            await fs.unlink(oldPic.imgProfile, (err) => {
                if (err) return res.status(500).json({
                    message: "Ada kesalahan",
                    error: err.message
                });
            });
        }

        await db.sequelize.transaction(async (t) => {
            const result = await User.update(
                { imgProfile: req.file.path },
                { where: { id: userId } }, // Menggunakan ID pengguna yang sudah diambil
                { transaction: t }
            );
            return res.status(200).json({ message: "Berhasil", result });
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    uploadImage
}
