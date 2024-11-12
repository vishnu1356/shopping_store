import React from 'react';
import Checkout from '../component/Checkout';

const Cart = () => {
  return (
    <>
      <div className="p-5 w-4/5 mx-auto">
        <h2 className="text-4xl font-bold mb-4 md:mb-16 text-center mt-4 md:mt-12">Your cart items</h2>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="text-left">
              <th className="pb-3">Image</th>
              <th className="pb-3">Product Name</th>
              <th className="pb-3">Unit Price</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Sub Total</th>
              <th className="pb-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3">
                <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="product"
                  className="w-16 h-16"
                />
              </td>
              <td className="py-3 text-left">Lorem ipsum accessories six</td>
              <td className="py-3">
                <span className="line-through text-gray-500 mr-2">$12.45</span> $9.96
              </td>
              <td className="py-3 flex space-x-2 mt-4">
                <button className="w-6 h-6 border border-gray-300 text-center bg-gray-100">
                  -
                </button>
                <span>1</span>
                <button className="w-6 h-6 border border-gray-300 text-center bg-gray-100">
                  +
                </button>
              </td>
              <td className="">$9.96</td>
              <td className="py-3">
                <button className="text-red-600 text-3xl">&times;</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between mt-6">
          <button className="px-5 py-2 bg-blue-500 font-semibold hover:bg-blue-600 rounded-md text-white">CONTINUE SHOPPING</button>
          <button className="px-5 py-2 bg-blue-500 font-semibold hover:bg-blue-600 rounded-md text-white">CLEAR SHOPPING CART</button>
        </div>
      </div>

      <Checkout />
    </>
  );
};

export default Cart;
