import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



export default function ProductFrom(){
    return(
        <div>
            <Link to={'/addgenre'} className="btn w-64 rounded-full">หมวดหมู่</Link>
            <Link  to={'/addproduct'} className="btn w-64 rounded-full">เพิ่มสินค้า</Link>
        </div>
    );
}