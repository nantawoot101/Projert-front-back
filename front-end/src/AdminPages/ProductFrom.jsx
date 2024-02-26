import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function ProductFrom() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        // เรียกข้อมูลสินค้าจาก API
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8888/books/');
                setBook(response.data);
            } catch (error) {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <Link to={'/addgenre'} className="btn w-64 rounded-full">หมวดหมู่</Link>
            <Link to={'/addproduct'} className="btn w-64 rounded-full">เพิ่มสินค้า</Link>

            <h2 className="text-xl font-bold mt-5">รายการสินค้า</h2>
            <div className="grid grid-cols-3 gap-4 mt-3">
                {book.map((book, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        <img src={book.bookimg} alt={book.title} className="mb-3 w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold">ชื่อ: {book.title}</h3>
                        <p className="text-gray-500"> ชื่อผู้แต่ง: {book.author}</p>
                        <p className="text-gray-500"> คำอธิบาย: {book.description}</p>
                        <p className="mt-2 text-gray-700">ราคา: {book.price} บาท</p>
                        <p className="mt-2 text-gray-700">จำนวน: {book.stock_quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}