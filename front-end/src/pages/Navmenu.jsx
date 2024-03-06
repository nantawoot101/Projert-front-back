import { Link } from "react-router-dom";


export default function Navmenu(){


    return (
      <nav className="flex justify-center items-center py-4 px-8 bg-gray-100">
      <div>
      <form>
        <label className="flex justify-center">
          <select className="w-full h-10 max-w-xs pl-2 text-lg text-center bg-gray-100" name="Book">
            <option value="">หนังสือทั้งหมด</option>
            <option value="">หนังสือเรียน</option>
            <option value="">นิยาย</option>
            <option value="">หนังสือการ์ตูน</option>
          </select>
        </label>
      </form>

        <Link to="/home" className="mr-4">หน้าแรก</Link>
        <a href="/selling-well" className="mr-4">ขายดี</a>
        <a href="/new-areival" className="mr-4">มาใหม่</a>
        <a href="#" className="mr-4">โปรโมชั่น</a>
        <a href="#" className="mr-4">แนะนำ</a>
      </div>
      
    </nav>
  );
}
