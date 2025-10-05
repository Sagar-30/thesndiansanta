import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.minimalHeader}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src="logo.svg" alt="Logo" style={{ display: 'block', height: '4rem', width: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <a href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
          <a href="/categories" className={styles.navLink}>Categories</a>
          <a href="/collection" className={styles.navLink}>Collections</a>
          <a href="/occasions" className={styles.navLink}>Occasions</a>
          <a href="/bespoke" className={styles.navLink}>Customize</a>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search luxury gifts..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Icons */}
          <div className={styles.actionIcons}>
            <button className={styles.iconButton} aria-label="Wishlist">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none"/>
              </svg>
            </button>

            <button className={styles.iconButton} aria-label="Cart">
              <div className={styles.cartBadge}>3</div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM7 13l-2.3 2.3c-.4.4-.1 1.2.5 1.2H17m0 0v3a2 2 0 11-4 0v-3m4 0h-4" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.userAvatar}>
              <div className={styles.avatarIcon}>
                <Link to="/login">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav className={styles.mobileNavContent}>
          <a href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</a>
          <a href="/collections" className={styles.mobileNavLink} onClick={closeMobileMenu}>Collections</a>
          <a href="/occasions" className={styles.mobileNavLink} onClick={closeMobileMenu}>Occasions</a>
          <a href="/bespoke" className={styles.mobileNavLink} onClick={closeMobileMenu}>Bespoke</a>
        </nav>
        <button className={styles.mobileCloseButton} onClick={closeMobileMenu}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;