import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import './App.css'

import { CartProvider } from './CartContext'

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
    </CartProvider>
  );
}

export default App