import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddToCart from './Components/AddtoCart';
import { CartProvider } from './Home/cartContext';
import Footer from './Components/Footer';

createRoot(document.getElementById('root')).render(
  <CartProvider> 
    <Router>
      <div className='h-full bg-slate-200'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<AddToCart />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  </CartProvider>
);
