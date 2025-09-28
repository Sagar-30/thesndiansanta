import React from 'react';
import Header from './components/header/header';
import Home from './pages/Home/Home';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Home />
      </main>
    </div>
  );
}

export default App;