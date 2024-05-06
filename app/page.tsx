'use client';

import Navbar from '../components/Navbar.client';
import Footer from '../components/Footer.client';
import Product from '../components/Product.client';
import Cart from '../components/Cart.client';
import React from 'react';
import { useState } from 'react';

const Home = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <Product name="Product 1" price={100} image="/images/cap.jpg" />
        <Product name="Product 2" price={200} image="/images/crocs.jpg" />
        {/* Add more products as needed */}
        <Cart items={cartItems} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;