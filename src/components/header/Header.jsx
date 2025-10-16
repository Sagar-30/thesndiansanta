import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? styles.navLinkActive : '';
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  const handleSearchBlur = () => {
    // Small delay to allow for click events to register
    setTimeout(() => {
      setShowMobileSearch(false);
    }, 200);
  };

  return (
    <>
      {/* Top Header - Visible on all screens */}
      <header className={styles.minimalHeader}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className={styles.logoIcon} onClick={() => navigate("/")}>
              <img src="logo.svg" alt="Logo" style={{ display: 'block', height: '4rem', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link to="/" className={`${styles.navLink} ${isActiveLink('/')}`}>Home</Link>
            <Link to="/categories" className={`${styles.navLink} ${isActiveLink('/categories')}`}>Categories</Link>
            <Link to="/collections" className={`${styles.navLink} ${isActiveLink('/collections')}`}>Collections</Link>
            <Link to="/occasions" className={`${styles.navLink} ${isActiveLink('/occasions')}`}>Occasions</Link>
            <Link to="/customize" className={`${styles.navLink} ${isActiveLink('/customize')}`}>Customize</Link>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Search - Visible on desktop, hidden on mobile */}
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
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Icons - Always visible */}
            <div className={styles.actionIcons}>
              {/* Search Icon - Only visible on mobile */}
              <button 
                className={`${styles.iconButton} ${styles.mobileSearchButton}`} 
                aria-label="Search"
                onClick={toggleMobileSearch}
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <button className={styles.iconButton} aria-label="Favorite" onClick={() => navigate("/favorite")}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none" />
                </svg>
              </button>

              <button className={styles.iconButton} aria-label="Cart" onClick={() => navigate("/cart")}>
                <div className={styles.cartBadge}>3</div>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM7 13l-2.3 2.3c-.4.4-.1 1.2.5 1.2H17m0 0v3a2 2 0 11-4 0v-3m4 0h-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </button>

              {/* Login icon - Hidden on mobile */}
              <div className={`${styles.userAvatar} ${styles.desktopOnly}`}>
                {/* <div className={styles.avatarIcon} onClick={() => navigate("/login")}>
                  <svg width="28" height="28 " viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div> */}
                <button className={styles.iconButton} aria-label="Cart" onClick={() => navigate("/login")}>
                <div className={styles.cartBadge}>3</div>
                <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
              </button>

              </div>
            </div>

            {/* Mobile Menu Button - Hidden now */}
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
      </header>

      {/* Mobile Search Bar - Only visible on mobile when search is active */}
      {showMobileSearch && (
        <div className={styles.mobileSearchContainer}>
          <input
            type="text"
            placeholder="Search luxury gifts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBlur={handleSearchBlur}
            className={styles.mobileSearchInput}
            autoFocus
          />
          <div className={styles.mobileSearchIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className={styles.mobileBottomNav}>
        <Link to="/" className={`${styles.bottomNavLink} ${isActiveLink('/')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Home</span>
        </Link>

        <Link to="/categories" className={`${styles.bottomNavLink} ${isActiveLink('/categories')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Categories</span>
        </Link>

        <Link to="/collections" className={`${styles.bottomNavLink} ${isActiveLink('/collections')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Collections</span>
        </Link>

        {/* Occasions - Commented but not removed */}
        {/* <Link to="/occasions" className={`${styles.bottomNavLink} ${isActiveLink('/occasions')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87V14.13a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Occasions</span>
        </Link> */}

        <Link to="/customize" className={`${styles.bottomNavLink} ${isActiveLink('/customize')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6h.01M12 12h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Customize</span>
        </Link>

        {/* Login/Account - Added to bottom nav */}
        <Link to="/login" className={`${styles.bottomNavLink} ${isActiveLink('/login')}`}>
          <div className={styles.bottomNavIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span className={styles.bottomNavText}>Account</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;