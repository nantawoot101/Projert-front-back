import React, { useState } from 'react';
import axios from 'axios';

export default function ReviewForm ( bookId ) {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/reviews', {
                review_text: reviewText,
                rating: rating,
                user_id: user_id, // รหัสผู้ใช้ (ให้แก้ไขตามระบบการเข้าสู่ระบบ)
                book_id: bookId
            });
            // หลังจากส่งรีวิวสำเร็จ สามารถทำอย่างอื่นต่อได้ เช่น รีเฟรชหน้าหรือแสดงข้อความว่าส่งรีวิวสำเร็จ
        } catch (error) {
            console.error('Error creating review:', error);
            // หากมีข้อผิดพลาดในการสร้างรีวิว แสดงข้อความผิดพลาดหรือทำการจัดการตามที่เหมาะสม
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            <input type="number" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
            <button type="submit">เขียนรีวิว</button>
        </form>
    );
};

