import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import styles from './App.module.css';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;