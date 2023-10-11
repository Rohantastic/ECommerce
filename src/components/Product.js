import React from 'react';

const Product = ({ title, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
