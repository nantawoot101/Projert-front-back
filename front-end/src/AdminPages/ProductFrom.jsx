import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ProductFrom() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // เรียกข้อมูลสินค้าจาก API
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8888/books/');
                setBooks(response.data);
            } catch (error) {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า:', error);
            }
        };

        fetchBooks();
    }, []);

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8888/books/${id}`);
            // หลังจากลบข้อมูลสำเร็จ ให้ดึงข้อมูลสินค้าใหม่
            const response = await axios.get('http://localhost:8888/books/');
            setBooks(response.data);
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
        }
    };

    return (
        <div>
            <Link to={'/addgenre'} className="btn w-64 rounded-full">หมวดหมู่</Link>
            <Link to={'/addproduct'} className="btn w-64 rounded-full">เพิ่มสินค้า</Link>

            <h2 className="text-xl font-bold mt-5">รายการสินค้า</h2>
            <div className="grid grid-cols-3 gap-4 mt-3">
                {books.map((book, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        <img src={`http://localhost:8888/product/${book.bookimg}`} alt={book.title} className="mb-3 w-full h-40 object-cover rounded-md" />
                        <h3 className="text-lg font-semibold">ชื่อ: {book.title}</h3>
                        <p className="text-gray-500"> ชื่อผู้แต่ง: {book.author}</p>
                        <p className="text-gray-500"> คำอธิบาย: {book.description}</p>
                        <p className="mt-2 text-gray-700">ราคา: {book.price} บาท</p>
                        <p className="mt-2 text-gray-700">จำนวน: {book.stock_quantity}</p>
                        {/* ปุ่มสำหรับการลบและแก้ไข */}
                        <div className="flex mt-4">
                            <Link to={`/editbook/${book.id}`} className="btn mr-2">แก้ไข</Link>
                            <button onClick={() => deleteBook(book.id)} className="btn bg-red-500 text-white">ลบ</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}