import React from 'react';

const Checkout = () => {
  return (
    <div className="flex justify-center space-x-4 p-4">
      {/* Coupon Code Section */}
      <div className="bg-gray-100 p-6 rounded-lg w-1/3">
        <h2 className="font-semibold text-lg mb-2">Use Coupon Code</h2>
        <p className="text-gray-500 mb-4">Enter your coupon code if you have one.</p>
        <input
          type="text"
          placeholder="Coupon code"
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
          APPLY COUPON
        </button>
      </div>

      {/* Cart Total Section */}
      <div className="bg-gray-100 p-6 rounded-lg w-1/3">
        <h2 className="font-semibold text-lg mb-2">Cart Total</h2>
        <div className="flex justify-between text-gray-500 mb-2">
          <span>Total products</span>
          <span>€9.96</span>
        </div>
        <div className="flex justify-between text-blue-500 font-bold text-xl mb-4">
          <span>Grand Total</span>
          <span>€9.96</span>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
