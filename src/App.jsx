import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';


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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;