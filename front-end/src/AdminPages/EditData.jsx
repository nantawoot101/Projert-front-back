import axios from 'axios';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export default function EditData({ userId }) {
  const { token } = useAuth();
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    address: '',
    gender: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/users/${userId}`);
        setInput(response.data);
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);
      }
    };
  
    fetchUser();
  }, [userId]);

  const hdlChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      const response = await axios.put(`http://localhost:8888/users/edituser/${userId}`, input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      if (response.status === 200) {
        alert('แก้ไขข้อมูลสำเร็จ');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการแก้ไขข้อมูล:', error.message);
    }
  };

  const hdlReset = () => {
    setInput({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      phone: '',
      email: '',
      address: '',
      gender: ''
    });
  };
    
  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5">
      <div className="text-3xl mb-10 text-center">แก้ไขข้อมูลผู้ใช้</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">ชื่อจริง</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="firstname"
            value={input.firstname}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">นามสกุล</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="lastname"
            value={input.lastname}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">เพศ</span>
          </div>
          <select
            className="select select-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="gender"
            value={input.gender}
            onChange={hdlChange}
          >
            <option value="">เลือกเพศของคุณ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">อื่นๆ</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="phone"
            value={input.phone}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">อีเมล</span>
          </div>
          <input
            type="email"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">ที่อยู่</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 pl-2"
            name="address"
            value={input.address}
            onChange={hdlChange}
          />
        </label>

        <div className="flex gap-5">
          <button type="submit" className="btn bg-green-500 transition duration-300 hover:bg-green-600 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20 mr-2">แก้ไข</button>
          <button type="button" onClick={hdlReset} className="btn bg-red-600 transition duration-300 hover:bg-red-500 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20">ยกเลิก</button>
        </div>
      </form>
    </div>
  );
}