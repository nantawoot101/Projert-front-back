const db = require("../models/db");

exports.getAllShippingAddress = async (req, res, next) => {
  try {
    const shippingAddress  = await db.shippingAddress.findMany();
    res.json(shippingAddress);
  } catch (err) {
    next(err);
  }
};



exports.createShippingAddress = async (req, res, next) => {
  const { recipient_fname, recipient_lname, shipping_address, district, prefecture, province,zip_code,phone } = req.body;
  const userId = req.user.id ;
  try {
      if (!(recipient_fname && recipient_lname && shipping_address && district && prefecture && province && zip_code && phone)) {
          return res.status(404).json({ error: 'Please provide all required book information' });
      }

      const data = {
        recipient_fname,
        recipient_lname,
        shipping_address,
        district,
        prefecture,
        province,
        zip_code,
        phone,
        userId: userId,
      };

      
      const rsb = await db.shippingAddress.create({data});
      console.log(rsb);

      res.json({ msg: 'เพิ่มสินค้าสำเร็จ' ,data: rsb});
  } catch (err) {
      next(err);
  }
}


  // ลบข้อมูล ShippingInformation โดย ID
exports.deleteShipping = async (req, res) => {
  const { id } = req.params;
  try {
    await db.shippingAddress.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting shipping information:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

  // แสดงข้อมูล ShippingInformation โดย ID
  exports.getShippingById = async (req, res, next) => {
      try {
        const { id } = req.params;
  
      // ตรวจสอบว่า id เป็น integer
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
      }
  
      // ค้นหา user โดยใช้ id
      const shippingAddress = await db.shippingAddress.findUnique({
        where: {
          id: parseInt(id),
        },
      });
  
  
      if (!shippingAddress) {
        return res.status(404).json({ error: "Book not found" });
      }
  
      // ส่ง response user
      res.json(shippingAddress);
    } catch (err) {
      next(err);
    }
  };