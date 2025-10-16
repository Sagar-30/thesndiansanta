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

  // You may also like products
  const recommendedProducts = [
    {
      id: 101,
      name: "Luxury Fountain Pen",
      price: "$320",
      originalPrice: "$380",
      image: "✒️",
      category: "Writing"
    },
    {
      id: 102,
      name: "Silk Scarf Collection",
      price: "$180",
      originalPrice: "$220",
      image: "🧣",
      category: "Accessories"
    },
    {
      id: 103,
      name: "Marble Cheese Board",
      price: "$150",
      originalPrice: "$190",
      image: "🧀",
      category: "Home"
    },
    {
      id: 104,
      name: "Crystal Wine Glasses",
      price: "$220",
      originalPrice: "$280",
      image: "🥂",
      category: "Barware"
    },
    {
      id: 105,
      name: "Leather Travel Case",
      price: "$290",
      originalPrice: "$350",
      image: "🧳",
      category: "Travel"
    },
    {
      id: 106,
      name: "Artisanal Tea Set",
      price: "$170",
      originalPrice: "$210",
      image: "🍵",
      category: "Home"
    }
  ];

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const moveAllToCart = () => {
    // Logic to move all favorites to cart
    console.log('Moving all favorites to cart');
  };

  const addToCart = (product) => {
    // Logic to add product to cart
    console.log('Adding to cart:', product);
  };

  const addToFavorites = (product) => {
    // Logic to add product to favorites
    console.log('Adding to favorites:', product);
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

            {/* You May Also Like Section */}
            <div className={styles.recommendedSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>You May Also Like</h2>
                <p className={styles.sectionSubtitle}>Complete your luxury collection</p>
              </div>
              
              <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                  {recommendedProducts.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                      <div className={styles.productImage}>
                        <span className={styles.productIcon}>{product.image}</span>
                        <button 
                          className={styles.favoriteButton}
                          onClick={() => addToFavorites(product)}
                          aria-label="Add to favorites"
                        >
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                                  stroke="currentColor" 
                                  strokeWidth="1.5" 
                                  fill="none"/>
                          </svg>
                        </button>
                      </div>
                      
                      <div className={styles.productInfo}>
                        <div className={styles.productCategory}>{product.category}</div>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <div className={styles.productPrices}>
                          <span className={styles.productCurrentPrice}>{product.price}</span>
                          {product.originalPrice && (
                            <span className={styles.productOriginalPrice}>{product.originalPrice}</span>
                          )}
                        </div>
                        
                        <button 
                          className={styles.addToCartButton}
                          onClick={() => addToCart(product)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM7 13l-2.3 2.3c-.4.4-.1 1.2.5 1.2H17m0 0v3a2 2 0 11-4 0v-3m4 0h-4" 
                                  stroke="currentColor" 
                                  strokeWidth="1.5" 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round"/>
                          </svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
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