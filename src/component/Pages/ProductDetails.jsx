import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import dummy from "../../assets/image/laptop.jpg";
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  // Handle increase and decrease for quantity
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to your cart!`);
  };

  return (
    <div className="product-container">
      {/* Left: Product Image */}
      <div className="product-image">
        <img
          src={dummy}
          alt="Product"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right: Product Details */}
      <div className="product-details">
        <h1 className="product-title">Product Title</h1>
        <p className="product-description">
          This is a detailed description of the product. It talks about the features, benefits, and how it can help the customer.
        </p>

        {/* Quantity Controls */}
        <div className="quantity-controls">
          <Button
            onClick={() => handleQuantityChange('decrease')}
            color="gray"
            size="sm"
            className="px-4 py-2"
          >
            -
          </Button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-16 text-center border rounded-lg p-2 text-lg"
          />
          <Button
            onClick={() => handleQuantityChange('increase')}
            color="gray"
            size="sm"
            className="px-4 py-2"
          >
            +
          </Button>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
