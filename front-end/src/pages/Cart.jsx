import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8888/cart');
                console.log('Cart items:', response.data); // เพิ่ม console.log() เพื่อดูข้อมูลที่ได้รับ
                setCartItems(response.data); // อัปเดต state ของ cartItems ด้วยข้อมูลที่ได้รับจากเซิร์ฟเวอร์ API
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
    
        fetchCartItems();
    }, []);

    return (
        <div>
            <h1 className="text-[36px] mt-10 text-center">ตระกร้า</h1>
            <h1 className="text-[18px] text-center text-gray-400">เลือกหนังสือที่ต้องการชำระเงิน</h1>
            {/* แสดงรายการสินค้าในตะกร้า */}
            {cartItems.map((item, index) => (
                <div key={index}>
                    <p>cart_quantity: {item.quantity}</p> {/* รับค่าจำนวนสินค้าจากฟิลด์ quantity ในตาราง CartItem */}
                    <p>userId: {item.user.userId}</p> {/* รับค่า userId จากตาราง User ผ่านตาราง Cart */}
                    <p>bookId: {item.book.id}</p> {/* รับค่า bookId จากฟิลด์ bookId ในตาราง CartItem */}
                </div>
            ))}
        </div>
    );
}