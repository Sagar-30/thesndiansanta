import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Password reset logic will go here
    console.log('Password reset requested for:', formData.email);
    setIsSubmitted(true);
  };

  return (
    <div className={styles.forgotPasswordPage}>
      <div className={styles.forgotPasswordContainer}>
        {/* Left Side - Branding */}
        <div className={styles.brandSection}>
          <div className={styles.brandContent}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                  <line x1="20" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoPrimary}>The Indian</span>
                <span className={styles.logoSecondary}>Santa</span>
              </div>
            </Link>
            
            <div className={styles.brandMessage}>
              <h2>Reset Your Password</h2>
              <p>We'll help you get back into your account quickly and securely.</p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔒</div>
                <div className={styles.featureText}>
                  <h4>Secure Process</h4>
                  <p>Your information is protected</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureText}>
                  <h4>Quick Recovery</h4>
                  <p>Get back to shopping in minutes</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📧</div>
                <div className={styles.featureText}>
                  <h4>Email Instructions</h4>
                  <p>Step-by-step guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <Link to="/login" className={styles.backButton}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Back to login
              </Link>
              <h1>Forgot Password?</h1>
              <p>Enter your email address and we'll send you instructions to reset your password.</p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.forgotPasswordForm}>
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
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Recovery Email
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                <div className={styles.helpText}>
                  <p>If you don't receive an email within 5 minutes, please check your spam folder or contact our support team.</p>
                </div>
              </form>
            ) : (
              <div className={styles.successSection}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2>Check Your Email</h2>
                <p className={styles.successMessage}>
                  We've sent password reset instructions to <strong>{formData.email}</strong>. 
                  Please check your inbox and follow the link to reset your password.
                </p>
                <div className={styles.successActions}>
                  <button 
                    type="button" 
                    className={styles.resendButton}
                    onClick={() => setIsSubmitted(false)}
                  >
                    Resend Email
                  </button>
                  <Link to="/login" className={styles.backToLogin}>
                    Back to Login
                  </Link>
                </div>
                <div className={styles.helpText}>
                  <p>Didn't receive the email? Check your spam folder or ensure you entered the correct email address.</p>
                </div>
              </div>
            )}

            <div className={styles.supportLink}>
              <p>
                Need help?{' '}
                <Link to="/contact" className={styles.supportText}>
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;