import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Italian Leather Journal",
      price: 280,
      quantity: 1,
      image: "📔",
      category: "Writing",
      inStock: true
    },
    {
      id: 2,
      name: "Crystal Decanter Set",
      price: 450,
      quantity: 1,
      image: "🍷",
      category: "Barware",
      inStock: true
    },
    {
      id: 3,
      name: "Artisan Ceramic Set",
      price: 190,
      quantity: 2,
      image: "🍶",
      category: "Home",
      inStock: true
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const moveToFavorites = (id) => {
    // Logic to move item to favorites
    console.log('Moving item to favorites:', id);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Shopping Cart</h1>
          <p className={styles.pageSubtitle}>
            Review your items and proceed to checkout
          </p>
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyDescription}>
              Discover our luxury collections and find the perfect gifts.
            </p>
            <Link to="/collections" className={styles.exploreButton}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <span className={styles.itemIcon}>{item.image}</span>
                  </div>

                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <div className={styles.itemPrice}>${item.price}</div>
                    </div>
                    
                    <div className={styles.itemCategory}>{item.category}</div>
                    
                    <div className={styles.itemActions}>
                      <div className={styles.quantityControl}>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <div className={styles.actionButtons}>
                        <button 
                          className={styles.actionButton}
                          onClick={() => moveToFavorites(item.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                                  stroke="currentColor" 
                                  strokeWidth="1.5" 
                                  fill="none"/>
                          </svg>
                          Save for later
                        </button>
                        
                        <button 
                          className={styles.actionButton}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  strokeLinecap="round"/>
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className={styles.orderSummary}>
              <div className={styles.summaryCard}>
                <h3 className={styles.summaryTitle}>Order Summary</h3>
                
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className={styles.summaryDivider}></div>
                
                <div className={styles.summaryTotal}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {subtotal < 500 && (
                  <div className={styles.freeShippingNote}>
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                  </div>
                )}

                <button className={styles.checkoutButton}>
                  Proceed to Checkout
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>

                <div className={styles.securityNote}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          fill="none"/>
                  </svg>
                  Secure checkout. Your information is safe with us.
                </div>
              </div>

              {/* Continue Shopping */}
              <Link to="/collections" className={styles.continueShopping}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        {cartItems.length > 0 && (
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🚚</div>
              <div className={styles.trustText}>
                <strong>Free Shipping</strong>
                <span>On orders over $500</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>↩️</div>
              <div className={styles.trustText}>
                <strong>Easy Returns</strong>
                <span>30-day return policy</span>
              </div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔒</div>
              <div className={styles.trustText}>
                <strong>Secure Payment</strong>
                <span>Your data is protected</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;