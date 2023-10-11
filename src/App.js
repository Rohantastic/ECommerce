import React from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1>Featured Products</h1>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
