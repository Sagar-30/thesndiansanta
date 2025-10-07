import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Italian Leather Journal",
      price: "$280",
      originalPrice: "$350",
      description: "Handcrafted leather with gold foil detailing",
      image: "📔",
      category: "Writing",
      inStock: true
    },
    {
      id: 2,
      name: "Crystal Decanter Set",
      price: "$450",
      originalPrice: "$550",
      description: "Lead-free crystal with walnut base",
      image: "🍷",
      category: "Barware",
      inStock: true
    },
    {
      id: 3,
      name: "Cashmere Travel Set",
      price: "$320",
      originalPrice: "$400",
      description: "Ultra-soft cashmere blanket and pillow",
      image: "🧣",
      category: "Travel",
      inStock: false
    },
    {
      id: 4,
      name: "Artisan Ceramic Set",
      price: "$190",
      originalPrice: "$240",
      description: "Hand-thrown ceramics with mineral glaze",
      image: "🍶",
      category: "Home",
      inStock: true
    }
  ]);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const moveAllToCart = () => {
    // Logic to move all favorites to cart
    console.log('Moving all favorites to cart');
  };

  return (
    <div className={styles.favoritesPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.pageHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>Your Favorites</h1>
            <p className={styles.pageSubtitle}>
              Curated items you've saved for later
            </p>
          </div>
          {favorites.length > 0 && (
            <button className={styles.moveAllButton} onClick={moveAllToCart}>
              Move All to Cart
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Favorites Content */}
        {favorites.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>💝</div>
            <h2 className={styles.emptyTitle}>No favorites yet</h2>
            <p className={styles.emptyDescription}>
              Start exploring our collections and save items you love for later.
            </p>
            <Link to="/collections" className={styles.exploreButton}>
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className={styles.favoritesContent}>
            <div className={styles.favoritesGrid}>
              {favorites.map((item) => (
                <div key={item.id} className={styles.favoriteCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.itemImage}>
                      <span className={styles.itemIcon}>{item.image}</span>
                    </div>
                    <button 
                      className={styles.removeButton}
                      onClick={() => removeFromFavorites(item.id)}
                      aria-label="Remove from favorites"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.itemCategory}>{item.category}</div>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    
                    <div className={styles.priceSection}>
                      <div className={styles.prices}>
                        <span className={styles.currentPrice}>{item.price}</span>
                        {item.originalPrice && (
                          <span className={styles.originalPrice}>{item.originalPrice}</span>
                        )}
                      </div>
                      {!item.inStock && (
                        <div className={styles.outOfStock}>Out of Stock</div>
                      )}
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    {item.inStock ? (
                      <button className={styles.addToCartButton}>
                        Add to Cart
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM7 13l-2.3 2.3c-.4.4-.1 1.2.5 1.2H17m0 0v3a2 2 0 11-4 0v-3m4 0h-4" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ) : (
                      <button className={styles.notifyButton} disabled>
                        Notify When Available
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations */}
            <div className={styles.recommendations}>
              <h2 className={styles.recommendationsTitle}>You Might Also Like</h2>
              <div className={styles.recommendationsGrid}>
                <div className={styles.recommendationCard}>
                  <div className={styles.recImage}>✨</div>
                  <h4>Luxury Pen Set</h4>
                  <p>$180</p>
                </div>
                <div className={styles.recommendationCard}>
                  <div className={styles.recImage}>🎁</div>
                  <h4>Gift Box Collection</h4>
                  <p>$120</p>
                </div>
                <div className={styles.recommendationCard}>
                  <div className={styles.recImage}>🕯️</div>
                  <h4>Artisan Candles</h4>
                  <p>$85</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;