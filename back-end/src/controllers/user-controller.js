const db = require("../models/db");


exports.getUsers = async (req, res, next) => {
    try {
        const users = await db.user.findMany();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ตรวจสอบว่า id เป็น integer
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    // ค้นหา user โดยใช้ id
    const user = await db.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    // ตรวจสอบว่า user ไม่ null
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // ส่ง response user
    res.json(user);
  } catch (err) {
    next(err);
  }
};

//แก้ไขข้อมูลผู้ใช้
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedUser = await db.user.update({
      where: { id: parseInt(id) },
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        password: data.password,
        phone: data.phone,
        email: data.email,
        address: data.address,
        gender: data.gender
      }
    });
    res.status(200).json({ msg: 'อัปเดตข้อมูลสำเร็จ', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'มีข้อผิดพลาดในการอัปเดตข้อมูล' });
  }
};

// ลบข้อมูลผู้ใช้
exports.deleteUser = async (req, res, next) => {

  try {
    
      const { id } = req.params; // รับค่า ID ผู้ใช้ที่ต้องการลบ
      // ค้นหาผู้ใช้โดยใช้ ID
      const user = await db.user.findUnique({
          where: {
              id: parseInt(id),
          },
      });

      // ถ้าไม่มีผู้ใช้ที่ต้องการลบ
      if (!user) {
          return res.status(404).json({ message: "ไม่พบผู้ใช้" });
      }

      // ลบผู้ใช้
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
