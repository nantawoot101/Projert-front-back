import { useState } from 'react';
import axios from 'axios';

export default function Payments() {

  return (
    <div className="p-5 border w-4/6 min-w-[1000px] mx-auto rounded mt-5">
      <div className="text-3xl mb-10 text-center">
        <h1 className="text-[36px] mt-10 text-center">ชำระเงิน</h1>
    </div>
    <form className="flex flex-col gap-2">
    <label className='form-control w-full max-w-xs mx-auto mb-5'>
        <div className="label">
            <span className="label-text">ชื่อผู้รับ</span>
        </div>
        <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_name"
            placeholder="ชื่อจริง"
        />
    </label> 
    <label className='form-control w-full max-w-xs mx-auto mb-5'>
        <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_name"
            placeholder="นามสกุล"
        />
    </label> 

        <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">ที่อยู่</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_img"

          />
        </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5">
            <div className="label">
              <span className="label-text">ตำบล</span>
            </div>
            <input
                type="text"
                className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
                name="bookId"

              />
              <div className="label">
              <span className="label-text">อำเภอ/เขต</span>
            </div>
            <input
                type="text"
                className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
                name="bookId"

              />
              <div className="label">
              <span className="label-text">จังหวัด</span>
            </div>
            <input
                type="text"
                className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
                name="bookId"

              />
          </label>

          <label className="form-control w-full max-w-xs mx-auto mb-5">
          <div className="label">
            <span className="label-text">รหัสไปรษณี</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_img"

          />
          <div className="label">
            <span className="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input
            type="text"
            className="input input-bordered border-2 rounded rounded-20 w-full h-10 max-w-xs pl-2"
            name="promote_img"

          />
        </label>
      </form>
    </div>
  );
}