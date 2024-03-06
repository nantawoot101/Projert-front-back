import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductFrom() {
    const [books, setBooks] = useState([]);
    const [bookId, setBookId] = useState('');
    const [quantity, setQuantity] = useState('');

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

    const addToCart = async (id) => {
        try {
            const response = await axios.post('http://localhost:8888/cart/add', {
                bookId: id,
                quantity: 1 ,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error adding book to cart:', error);
        }
    };


    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mt-3">
                {books.map((book, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        <img src={`http://localhost:8888/${book.bookimg}`} alt={book.title} className="mb-3 w-[300px] h-[300px] object-cover rounded-md" />
                        <h3 className="text-lg font-semibold"> ชื่อ: {book.title}</h3>
                        <p className="text-gray-500"> ชื่อผู้แต่ง: {book.author}</p>
                        <p className="text-gray-500"> คำอธิบาย: {book.description}</p>
                        <p className="mt-2 text-gray-700"> จำนวนสต๊อกสินค้า: {book.stock_quantity}</p>
                        <button onClick={() => addToCart(book.id)} className="btn bg-white text-green-500 px-4 py-2 rounded-md mt-2 border-green-500">เพิ่มสินค้าลงตระกร้า</button>
                        <button className="btn bg-green-500 text-white px-4 py-2 rounded-md mt-2 w-[150px]">฿ {book.price}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}