import React, { useState } from 'react';
// import dummy from "../../assets/image/laptop.jpg";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl  mx-auto my-10 p-4 ">
      {/* {/ Left Section - Product Images /} */}
      <div className="flex-1">
        <div className="relative">
          <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 text-xs rounded">-25%</span>
          <span className="absolute top-10 left-2 bg-purple-400 text-white px-2 py-1 text-xs rounded">New</span>
          <img
            src="https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_1280.jpg"
            alt="Main product"
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
        
        {/* {/ Thumbnail Images /} */}
        {/* <div className="flex mt-4 space-x-2">
          <img src="https://via.placeholder.com/80" alt="Thumbnail" className="w-16 h-16 object-cover rounded-md border" />
          <img src="https://via.placeholder.com/80" alt="Thumbnail" className="w-16 h-16 object-cover rounded-md border" />
          <img src="https://via.placeholder.com/80" alt="Thumbnail" className="w-16 h-16 object-cover rounded-md border" />
          <img src="https://via.placeholder.com/80" alt="Thumbnail" className="w-16 h-16 object-cover rounded-md border" />
        </div> */}
      </div>

      {/* {/ Right Section - Product Details /} */}
      <div className="flex-1 md:pl-8">
        <h1 className="text-2xl font-bold">Lorem ipsum accesso</h1>
        
        {/* {/ Price and Discount /} */}
        <div className="flex items-center space-x-4 my-4">
          <span className="text-xl font-semibold text-red-500">€9.96</span>
          <span className="text-gray-500 line-through">€12.45</span>
        </div>

        {/* {/ Rating /} */}
        <div className="flex space-x-1 text-yellow-400 text-lg mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        {/* {/ Description /} */}
        <p className="text-gray-600 mb-4">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </p>

        {/* {/ Quantity Selector and Add to Cart Button /} */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={decreaseQuantity}
              className="px-2 py-1 text-gray-500 hover:text-black"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-2 py-1 text-gray-500 hover:text-black"
            >
              +
            </button>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to Cart
          </button>
          <button className="text-gray-500 hover:text-black">❤️</button>
        </div>

        {/* {/ Categories and Tags /} */}
        <div className="mb-4">
          <span className="font-semibold">Categories:</span> accessories
        </div>
        <div className="mb-4">
          <span className="font-semibold">Tags:</span> accessories
        </div>

        {/* {/ Social Share Icons /} */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-black">🔗</a>
          <a href="#" className="text-gray-500 hover:text-black">🐦</a>
          <a href="#" className="text-gray-500 hover:text-black">📌</a>
          <a href="#" className="text-gray-500 hover:text-black">🔗</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
