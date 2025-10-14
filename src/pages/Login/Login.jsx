import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic will go here 
    console.log('Login attempt:', formData);
    Navigate('/user-account');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        {/* Left Side - Branding */}
        <div className={styles.brandSection}>
          <div className={styles.brandContent}>
            <Link className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                  <line x1="20" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoPrimary}>The Indian</span>
                <span className={styles.logoSecondary}>Santa</span>
              </div>
            </Link>

            <div className={styles.brandMessage}>
              <h2>Welcome Back</h2>
              <p>Continue your journey to finding the perfect luxury gifts for every occasion.</p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎁</div>
                <div className={styles.featureText}>
                  <h4>Curated Collections</h4>
                  <p>Access exclusive luxury items</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🚚</div>
                <div className={styles.featureText}>
                  <h4>Fast Delivery</h4>
                  <p>Global shipping available</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💎</div>
                <div className={styles.featureText}>
                  <h4>Premium Service</h4>
                  <p>24/7 concierge support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h1>Sign In</h1>
              <p>Enter your credentials to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <div className={styles.labelContainer}>
                  <label htmlFor="password" className={styles.formLabel}>
                    Password
                  </label>
                  <Link to="/forgot-password" className={styles.forgotLink}>
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.checkmark}></span>
                  Remember me
                </label>
              </div>

              <button type="submit" className={styles.loginButton}>
                Sign In
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className={styles.divider}>
                <span>or continue with</span>
              </div>

              <div className={styles.socialButtons}>
                <button type="button" className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z" fill="currentColor" />
                  </svg>
                  Facebook
                </button>
                <button type="button" className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 8.5c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5.675-1.5 1.5-1.5 1.5.675 1.5 1.5zm-9 0c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5.675-1.5 1.5-1.5 1.5.675 1.5 1.5zm9.857 5.232c-.389.49-.97.768-1.607.768h-7.5c-.637 0-1.218-.278-1.607-.768a2.25 2.25 0 01-.393-1.732c.222-1.368 1.424-2.5 2.893-2.5h5.214c1.469 0 2.67 1.132 2.893 2.5a2.25 2.25 0 01-.393 1.732z" fill="currentColor" />
                  </svg>
                  Google
                </button>
              </div>

              <div className={styles.signupLink}>
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup" className={styles.signupText}>
                    Create one here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;