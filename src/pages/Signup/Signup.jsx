import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';
// import firebaseConfigapp from '../../firebase/firebaseconfig';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Signup logic will go here
    console.log('Signup attempt:', formData);
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        {/* Left Side - Form */}
        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <Link to="/" className={styles.backButton}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Back to home
              </Link>
              <h1>Create Account</h1>
              <p>Join Indian Santa and discover luxury gifting like never before</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.signupForm}>
              <div className={styles.nameGroup}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName" className={styles.formLabel}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="lastName" className={styles.formLabel}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

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

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Create a strong password"
                  required
                />
                <div className={styles.passwordHint}>
                  Must be at least 8 characters with numbers and symbols
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.formLabel}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={styles.checkbox} 
                  />
                  <span className={styles.checkmark}></span>
                  I agree to the{' '}
                  <Link to="/terms" className={styles.link}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className={styles.link}>
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button 
                type="submit" 
                className={styles.signupButton}
                disabled={!formData.agreeToTerms}
              >
                Create Account
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className={styles.divider}>
                <span>or sign up with</span>
              </div>

              <div className={styles.socialButtons}>
                <button type="button" className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z" fill="currentColor"/>
                  </svg>
                  Facebook
                </button>
                <button type="button" className={styles.socialButton}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 8.5c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5.675-1.5 1.5-1.5 1.5.675 1.5 1.5zm-9 0c0 .825-.675 1.5-1.5 1.5s-1.5-.675-1.5-1.5.675-1.5 1.5-1.5 1.5.675 1.5 1.5zm9.857 5.232c-.389.49-.97.768-1.607.768h-7.5c-.637 0-1.218-.278-1.607-.768a2.25 2.25 0 01-.393-1.732c.222-1.368 1.424-2.5 2.893-2.5h5.214c1.469 0 2.67 1.132 2.893 2.5a2.25 2.25 0 01-.393 1.732z" fill="currentColor"/>
                  </svg>
                  Google
                </button>
              </div>

              <div className={styles.loginLink}>
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className={styles.loginText}>
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className={styles.benefitsSection}>
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsHeader}>
              <h2>Join Our Luxury Community</h2>
              <p>Experience the difference with Indian Santa</p>
            </div>

            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>💎</div>
                <div className={styles.benefitText}>
                  <h3>Exclusive Access</h3>
                  <p>Be the first to see new luxury collections and limited edition items</p>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🎯</div>
                <div className={styles.benefitText}>
                  <h3>Personalized Service</h3>
                  <p>Get tailored recommendations based on your preferences and occasions</p>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🚀</div>
                <div className={styles.benefitText}>
                  <h3>Priority Support</h3>
                  <p>24/7 access to our luxury concierge team for all your gifting needs</p>
                </div>
              </div>

              <div className={styles.benefit}>
                <div className={styles.benefitIcon}>🎁</div>
                <div className={styles.benefitText}>
                  <h3>Special Offers</h3>
                  <p>Receive members-only discounts and early access to sales</p>
                </div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>
                "Indian Santa transformed how I approach gifting. The quality and service are exceptional."
              </div>
              <div className={styles.author}>
                <div className={styles.authorAvatar}>👩‍💼</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Priya Sharma</div>
                  <div className={styles.authorRole}>Luxury Brand Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;