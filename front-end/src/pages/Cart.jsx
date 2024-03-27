import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth'; // Import your authentication hook

export default function Cart() {
    const { userId } = useAuth(); // Get the userId and setUserId from your authentication hook
    const [cartItems, setCartItems] = useState([]);
    

    useEffect(() => {
        const fetchCartItems = async () => {
          try {
            const response = await axios.get("http://localhost:8888/cart/getCart", {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setCartItems(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchCartItems();
      }, []);

      const deleteCart = async (id) => {
        try {
          await axios.delete(`http://localhost:8888/cart/deleteCart/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          setCartItems(cartItems.filter((item) => item.id !== id));
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <div>
            <h1 className="text-3xl mt-10 text-center">ตระกร้า</h1>
            <h2 className="text-lg mt-4 mb-2 text-center text-gray-400">เลือกหนังสือที่ต้องการชำระเงิน</h2>
            <div className="mt-4 border-b border-gray-300 max-w-[80%] mx-auto"></div>
            {cartItems.length === 0 ? (
                <h2 className="text-lg mt-5 mb-2 text-center text-red-500">ไม่พบสินค้าในตะกร้า</h2>
            ) : (
            <div className="overflow-x-auto mt-10">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                สินค้า
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ราคา
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                จำนวน
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ราคารวม
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-20 w-20">
                                            <img className="h-full w-full rounded-md" src={`http://localhost:8888/product/${item.book.bookimg}`} alt={item.book.title} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{item.book.title}</div>
                                            <div className="text-sm text-gray-500">ชื่อผู้แต่ง:{item.book.author}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.book.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cart_quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.book.price * item.cart_quantity}</td>
                                <td>
                                    <button className="text-red-500" onClick={() => deleteCart(item.id)}>ลบ</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>

                </div>
            </div>
            )}
        </div>
    );
}