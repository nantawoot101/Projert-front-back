import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Header() {
    const navigate = useNavigate()
  const {user, logout} = useAuth()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

    return (
        <div className="navbar bg-green-500 h-20 mx-auto flex items-center justify-between">
            { user? <Link to='#' onClick={hdlLogout} className='btn bg-white text-red-600 border-[2px] border-red-600 shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-64 h-10'>ออกจากระบบ</Link>  : (
        <div className='flex gap-x-4'>
          <Link to='/login' className="btn bg-green-600 text-white shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-64 h-10">เข้าสู่ระบบ/สมัครสมาชิก</Link>
        </div>
      ) }
    
    <Link to='/home' className="btn btn-ghost text-[36px] text-white text-center">Book-Click</Link>
    
    <div className="flex items-center justify-center">
        <input type="text" placeholder="ค้นหาหนังสือ" className="bg-gray-100 w-[300px] h-[40px] pl-2 rounded-[10px] mx-4"/>
        
        <Link to='/cart' className="btn bg-green-600 w-24 h-10 rounded-[10px] text-white">ตระกร้าสินค้า</Link>
        
        <img src="/src/img/icon/bell.png" alt="bell" className="w-[30px] h-[30px] ml-4 mr-5"/>
    </div>
      
      
    </div>
    );
}