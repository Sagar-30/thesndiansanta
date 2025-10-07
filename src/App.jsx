import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import Collections from './pages/Collections/Collections';
import Occasions from './pages/Occasions/Occasions';

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
            <Route path='/categories' element={<Categories />} />
            <Route path="/favorite" element={<Favorites/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/occasions" element={<Occasions />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;