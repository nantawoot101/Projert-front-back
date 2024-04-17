import React from 'react';


export default function Payments() {
  return (
    <div>
      <div>
        <h1>ช่องทางการชำระเงิน</h1>
        <hr/>
        <p>บริการชำระเงิน | </p>
        <p>บัญชีธนาคาร | </p>
        <p>สแกนQR CODE  </p>
      </div>
    
        <div className="border-green-500 border-[1px] rounded-lg p-4 mr-10">
                <h1 className="text-xl font-semibold mt-3">สรุปยอดรายการสั่งซื้อ</h1>
            <div className="ml-4">
                <img className="h-full w-full rounded-md" src={`http://localhost:8888/product/${item.book.bookimg}`} alt={item.book.title} />
                <div className="text-sm font-medium text-gray-900">{item.book.title}</div>
                <div className="text-sm text-gray-500">ชื่อผู้แต่ง:{item.book.author}</div>
            </div>
                <p className="mt-3">ยอดรวม: </p>
                <p className="mt-3">ค่าจัดส่ง: </p>
                <hr className="mt-3"/>
                <h1 className="text-xl font-semibold mt-3">ยอดรวมสุทธิ: {totalCost}</h1>
                <button  className="btn bg-green-500 text-white mt-5 w-[500px]">ดำเนินการสั่งซื้อ</button>
       </div>
    </div>
  );
}

