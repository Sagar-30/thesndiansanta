import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <svg className={styles.logoIcon} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <h2 className={styles.logoText}>Indian Santa</h2>
          </div>
          
          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <a className={styles.navLink} href="#home" onClick={closeMobileMenu}>Home</a>
            <a className={styles.navLink} href="#occasions" onClick={closeMobileMenu}>Occasions</a>
            <a className={styles.navLink} href="#gifts" onClick={closeMobileMenu}>Gifts</a>
            <a className={styles.navLink} href="#brands" onClick={closeMobileMenu}>Brands</a>
            <a className={styles.navLink} href="#blog" onClick={closeMobileMenu}>Blog</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        <div className={styles.actionsSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input 
              className={styles.searchInput}
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.iconButton} aria-label="Wishlist">
              <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </button>
            
            <button className={styles.iconButton} aria-label="Cart">
              <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
              </svg>
            </button>
          </div>

          <div 
            className={styles.userAvatar}
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT7FlVyU_jdATAxY_4m0P4Y6RuEAbWbhWBVA8vQcTplQKxRrrF9TKgtu3O1lZFDtpUhlr-pL_Jwxv0fn4NVRRrQ00K_ZLuRaXz-zm9FRdbgHJknl8QRjQthlHlUAFHipXSmxJO1DUpVQ-BQH3qnUiwu1nZACfNSGbp11rPSxjpnkaKdUqim1gtZ8EXUnzHRfngFYZhmZPWd0svGtK07czppyVKiV4WJCOIwrUTb63TQUTnuqS0FQi9dIWDTvlk1OI0Nho66gqK6I")'}}
            aria-label="User profile"
          ></div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`${styles.mobileNavOverlay} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <a className={styles.mobileNavLink} href="#home" onClick={closeMobileMenu}>Home</a>
            <a className={styles.mobileNavLink} href="#occasions" onClick={closeMobileMenu}>Occasions</a>
            <a className={styles.mobileNavLink} href="#gifts" onClick={closeMobileMenu}>Gifts</a>
            <a className={styles.mobileNavLink} href="#brands" onClick={closeMobileMenu}>Brands</a>
            <a className={styles.mobileNavLink} href="#blog" onClick={closeMobileMenu}>Blog</a>
          </nav>
        </div>

        {/* Mobile Navigation Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className={styles.mobileNavBackdrop}
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;