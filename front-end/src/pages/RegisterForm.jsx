import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstname : '',
    lastname: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    address: ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      const rs = await axios.post('http://localhost:8888/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }
  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5 ">
      <div className="text-3xl mb-10 text-center">สมัครสมาชิก</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>

      <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">ชื่อจริง</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="firstname"
            placeholder="ชื่อจริง"
            value={input.firstname}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">นามสกุล</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="lastname"
            placeholder="นามสกุล"
            value={input.lastname}
            onChange={ hdlChange }
          />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">เพศ</span>
          </div>
          <select
            className="select select-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="gender"
            value={input.gender}
            onChange={ hdlChange }        
            >
            <option name="select_gender" value={input.gender}>เลือกเพศของคุณ</option>
            <option name="man" value={input.gender}>ชาย</option>
            <option name="female" value={input.gender}>หญิง</option>
            <option name="other" value={input.gender}>อื่นๆ</option>
            </select>
            
          </label>
          

        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={ hdlChange }
          />
        </label>
          
      
        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="password"
            placeholder="Psername"
            value={input.password}
            onChange={ hdlChange }
          />
        </label>


        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="phone"
            placeholder="เบอร์โทรศัพท์"
            value={input.phone}
            onChange={ hdlChange }
          />
          </label>

        
        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">อีเมล</span>
          </div>
          <input
            type="email"
            className="input input-bordered border-2  rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="email"
            placeholder="อีเมล"
            value={input.email}
            onChange={ hdlChange }
          />
        </label>


        <label className="form-control w-full max-w-xs mx-auto mb-5 ">
          <div className="label">
            <span className="label-text">ที่อยู่</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 pl-2"
            name="address"
            placeholder="ที่อยู่"
            value={input.address}
            onChange={ hdlChange }
          />
        </label>


        <div className="flex gap-5 ">
          <button type="submit" className="btn bg-green-500 transition duration-300 hover:bg-green-600 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20 mr-2">สมัครสมาชิก</button>
          <button type="reset" className="btn bg-red-600 transition duration-300 hover:bg-red-500 text-white max-w-xs mx-auto w-[200px] h-10 rounded rounded-20">ยกเลิก</button>
        </div>
      </form>
    </div>
  );
}
