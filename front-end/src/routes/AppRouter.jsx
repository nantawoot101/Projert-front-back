import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import RegisterForm from '../pages/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../pages/Header'
import HomePage from '../pages/HomePage'
import Cart from '../pages/Cart'
import AdminHome from '../AdminPages/AdminHome'
import AdminNav from '../AdminPages/AdminNav'
import UserData from '../AdminPages/UserData'
import AdminData from '../AdminPages/Admindata'



const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <HomePage /> }, // ตั้งค่าให้ HomePage เป็นหน้าแรก
      { path: '/home', element: <HomePage /> }, // คุณอาจจะไม่จำเป็นต้องมีเส้นทางนี้หาก HomePage เป็นหน้าแรกแล้ว
      { path: '/login', element: <LoginForm />},
      { path: '/register', element: <RegisterForm />},
      { path: '/cart', element: <Cart />},
      { path: '/userdata', element: <UserData /> },
      { path: '/admindata', element: <AdminData /> },
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <HomePage /> }, // ตั้งค่าให้ HomePage เป็นหน้าแรก
      { path: '/login', element: <HomePage to='/' />}, // คุณอาจจะไม่จำเป็นต้องมีเส้นทางนี้หาก HomePage เป็นหน้าแรกแล้ว
      { path: '/home', element: <HomePage /> },
      { path: '/cart', element: <Cart />},
    ]
  }
])


const adminRouter = createBrowserRouter([
  {
    path: '/',
    element:  <div className='flex flex-row px-4 py-6 gap-x-4'>
      <AdminNav />
      <Outlet />
    </div>,
    children : [
      { index: true, element: <AdminHome /> },
      { path: '/login', element: <AdminHome to='/' />},
      { path: '/home', element: <AdminHome /> },
      { path: '/userdata', element: <UserData to='/'  /> },
      { path: '/admindata', element: <AdminData /> },
      
    ]
  }
])

export default function AppRouter() {
  const {user} = useAuth()
  
  const finalRouter = !user?.id ? guestRouter : user.role === 'Admin' ? adminRouter : userRouter
  return (
    <RouterProvider router={finalRouter} />
  )
}