import { useState } from 'react';
import axios from 'axios';

export default function AddGenre() {
  const [promote, setPromote] = useState({
    promote_name: '' ,
    promote_img: null ,
    bookId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromote({ ...promote, [name]: value });
  };

  const handleFileChange = (e) => {
    setPromote({ ...promote, promote_img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promotes = new FormData();
    promotes.append('promote_name', promote.promote_name);
    promotes.append('promote_img', promote.promote_img); // ใช้ชื่อ key ต่างกัน
    promotes.append('bookId', promote.bookId); // เพิ่ม bookId ใน FormData
    try {
      await axios.post('http://localhost:8888/promotes/add', promotes, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('เพิ่มการโปรโมทสำเร็จ')
    } catch (error) {
      console.error('Error creating promote:', error);
    }
  };

  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5">
      <div className="text-3xl mb-10 text-center">เพิ่มการโปรโมท</div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className='form-control w-full max-w-xs mx-auto mb-5'>
        <div className="label">
            <span className="label-text">ชื่อโปรโมท</span>
        </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_name"
            value={promote.promote_name}
            onChange={handleChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">เพิ่มภาพสินค้า</span>
          </div>
          <input
            type="file"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_img"
            onChange={handleFileChange}
          />
        </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5">
            <div className="label">
              <span className="label-text">รหัสหนังสือ</span>
            </div>
            <input
                type="number"
                className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
                name="bookId"
                value={promote.bookId} // เพิ่ม optional chaining ที่นี่
                onChange={handleChange}
              />
          </label>
        <div className="flex gap-5">
          <button type="submit" className="btn bg-green-500 transition duration-300 hover:bg-green-600 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20 mr-2">เพิ่มการโปรโมท</button>
          <button type="reset" className="btn bg-red-600 transition duration-300 hover:bg-red-500 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20">ยกเลิก</button>
        </div>
      </form>
    </div>
  );
}