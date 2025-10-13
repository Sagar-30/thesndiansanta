import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Header from './components/header/header';
import Home from './pages/Home/Home.jsx';
import Categories from './pages/Categories/Categories';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Collections from './pages/Collections/Collections';
import Occasions from './pages/Occasions/Occasions';
import Customize from './pages/Customize/Customize';


import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path='/categories' element={<Categories />} />
            <Route path="/favorite" element={<Favorites/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/occasions" element={<Occasions />} />
            <Route path="/customize" element={<Customize />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;