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
      <nav className='sticky left-0 flex flex-col  w-2/12 h-screen px-4 gap-y-6 bg-gray-100'>
       <div className="p-4">
  <h2 className="text-lg font-semibold">เมนูจัดการ</h2>
  <div className="">
  <Link to="/home" className=" py-2 rounded-md text-sm font-medium hover:bg-gray-200 hover:text-gray-900 focus:outline-none">
      Dashboard
  </Link>
  </div>
  <div className="">
    <Link to="/productfrom" className="">สินค้า</Link>
  </div>
  <div className="">
    <Link to="/promote-fromadmin" className="">โปรโมท</Link>
  </div>
  <div className="">
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
        
        </div>
        <Link to='#' onClick={hdlLogout} className='btn bg-white text-red-600 border-[2px] border-red-600 hover:bg-red-500 hover:text-white pl-2 mr-3 mt-2 w-56 h-10'>ออกจากระบบ</Link>
      </nav>
    )
}