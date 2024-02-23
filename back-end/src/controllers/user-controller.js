const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");


exports.getUsers = async (req, res, next) => {
    try {
        const users = await db.user.findMany();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const rs = await db.user.update(data, {
            where: { id: +id, userId: req.user.id }
        });
        res.json({ msg: 'Update ok', result: rs });
    } catch (err) {
        next(err);
    }
}

// ลบข้อมูลผู้ใช้
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params; // รับค่า ID ผู้ใช้ที่ต้องการลบ

    try {
        // ตรวจสอบว่ามีผู้ใช้ด้วย ID ที่ระบุหรือไม่
        const user = await db.user.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!user) {
            return res.status(404).json({ message: "ไม่พบผู้ใช้" });
        }


        await db.user.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.json({ message: "ลบผู้ใช้เรียบร้อยแล้ว" });
    } catch (err) {
        next(err);
    }
};