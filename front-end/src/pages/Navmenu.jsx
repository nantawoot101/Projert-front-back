export default function Navmenu(){
    return (
      <div>
        <form>
          <label className="flex justify-center mt-10 ">
          <select className="w-full h-[70px] max-w-xs pl-2 text-[24px] text-center"name="Book">
              <option value="">หนังสือทั้งหมด</option>
              <option value="">หนังสือเรียน</option>
              <option value="">นิยาย</option>
              <option value="">หนังสือการ์ตูน</option>
              </select>
          </label>
            <div className="text-center">
              <a href="#" className="mr-10">หน้าแรก</a>
              <a href="#" className="mr-10">ขายดี</a>
              <a href="#" className="mr-10">มาใหม่</a>
              <a href="#" className="mr-10">โปรโมชั่น</a>
              <a href="#" className="mr-10">แนะนำ</a>
            </div>
        </form>
      </div>
    )
  }