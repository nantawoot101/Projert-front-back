import useAuth from "../hooks/useAuth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function AdminNav() {
    const navigate = useNavigate()
    const {logout} = useAuth()
  
    const hdlLogout = () => {
      logout()
      navigate('/')
    }
    
    return (
      <nav className='sticky left-0 flex flex-col w-2/12 h-screen px-3 gap-y-5 bg-gray-100'>
       <div className="p-4">
  <h2 className="text-lg font-semibold mb-4">เมนูจัดการ</h2>
  <div className="mb-2">
    <Link to="/home" className="">แดชบอร์ด</Link>
  </div>
  <div className="mb-2">
    <button className="">สินค้า</button>
  </div>
  <div className="mb-2">
    <button className="">คำสั่งซื้อ</button>
  </div>
  <div>
    <button className="">การชำระเงิน</button>
  </div>
</div>

        <div>
          <h2>การจัดการผู้ใช้</h2>
          <div>
            <Link to="/userdata" className="" >ข้อมูลผู้ใช้</Link> 
            </div>
         
        <div>
          <Link to="/admindata" className="" >ข้อมูลแอดมิน</Link>  
        </div>
        
        </div>

        <div>
        <button>การตั้งค่า</button>
        <Link to='#' onClick={hdlLogout} className='btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-56 h-10'>ออกจากระบบ</Link>
        </div>
      </nav>
    )
}