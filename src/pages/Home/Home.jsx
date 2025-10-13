import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const featuredCollections = [
    {
      id: 1,
      name: "Timeless Elegance",
      description: "Classic pieces that never go out of style",
      items: "24 items",
      image: "🕰️"
    },
    {
      id: 2,
      name: "Modern Luxury",
      description: "Contemporary designs for the discerning",
      items: "18 items",
      image: "✨"
    },
    {
      id: 3,
      name: "Artisan Crafted",
      description: "Handmade pieces with exceptional detail",
      items: "16 items",
      image: "👐"
    },
    {
      id: 4,
      name: "Heritage Pieces",
      description: "Items with history and character",
      items: "22 items",
      image: "🏺"
    }
  ];

  const luxuryProducts = [
    {
      id: 1,
      name: "Italian Leather Journal",
      price: "280",
      description: "Handcrafted leather with gold foil detailing",
      image: "📔",
      category: "Writing"
    },
    {
      id: 2,
      name: "Crystal Decanter Set",
      price: "450",
      description: "Lead-free crystal with walnut base",
      image: "🍷",
      category: "Barware"
    },
    {
      id: 3,
      name: "Cashmere Travel Set",
      price: "320",
      description: "Ultra-soft cashmere blanket and pillow",
      image: "🧣",
      category: "Travel"
    },
    {
      id: 4,
      name: "Artisan Ceramic Set",
      price: "190",
      description: "Hand-thrown ceramics with mineral glaze",
      image: "🍶",
      category: "Home"
    },
    {
      id: 5,
      name: "Wooden Watch Box",
      price: "380",
      description: "Solid walnut with velvet lining",
      image: "⌚",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Brass Desk Set",
      price: "520",
      description: "Solid brass with marble accents",
      image: "✒️",
      category: "Office"
    }
  ];

  const occasions = [
    {
      id: 1,
      name: "Anniversary",
      description: "Celebrate lasting love",
      icon: "💝"
    },
    {
      id: 2,
      name: "Birthday",
      description: "Mark another year",
      icon: "🎂"
    },
    {
      id: 3,
      name: "Wedding",
      description: "Begin a new journey",
      icon: "💒"
    },
    {
      id: 4,
      name: "Corporate",
      description: "Professional appreciation",
      icon: "🏢"
    },
    {
      id: 5,
      name: "Graduation",
      description: "Celebrate achievement",
      icon: "🎓"
    },
    {
      id: 6,
      name: "Housewarming",
      description: "Welcome home",
      icon: "🏠"
    }
  ];

  const quickCategories = [
    { id: 1, name: "Personalized Gifts", icon: "🎁", color: "#c9a96e" },
    { id: 2, name: "Luxury Hampers", icon: "🧺", color: "#0a3d3f" },
    { id: 3, name: "Jewelry", icon: "💎", color: "#c9a96e" },
    { id: 4, name: "Home Decor", icon: "🏠", color: "#0a3d3f" },
    { id: 5, name: "Office Gifts", icon: "💼", color: "#c9a96e" },
    { id: 6, name: "Festive Special", icon: "🎊", color: "#0a3d3f" }
  ];

  const Navigate = useNavigate();

  return (
    <div className={styles.home}>
      {/* Header Banner */}
      <div className={styles.headerBanner}>
        <span>🎁 Free Gift Wrapping on All Orders | 🚚 Free Shipping Above 1200</span>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Thoughtful Gifts for <span className={styles.highlight}>Every Occasion</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Curated luxury gifts that speak volumes. From birthdays to milestones, find the perfect expression of your appreciation.
            </p>
            
            <div className={styles.heroActions}>
              <button 
                className={styles.primaryBtn}
                onClick={() => Navigate('/collections')}
              >
                Shop All Collections
              </button>
              <button className={styles.secondaryBtn}>
                Personalize Your Gift
              </button>
            </div>

            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎀</span>
                <span>Free Gift Wrap</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚚</span>
                <span>Fast Delivery</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>💝</span>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className={styles.quickCategories}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoriesGrid}>
            {quickCategories.map((category) => (
              <div 
                key={category.id} 
                className={styles.categoryCard}
                onClick={() => Navigate(`/category/${category.name.toLowerCase().replace(' ', '-')}`)}
              >
                <div 
                  className={styles.categoryIcon}
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <span className={styles.categoryName}>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredProducts}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Best Selling Gifts</h2>
            <button className={styles.viewAllBtn} onClick={() => Navigate('/products')}>
              View All
            </button>
          </div>
          
          <div className={styles.productsGrid}>
            {luxuryProducts.slice(0, 4).map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <span className={styles.productIcon}>{product.image}</span>
                  <button className={styles.wishlistBtn}>❤️</button>
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productCategory}>{product.category}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price}</span>
                    <button className={styles.addToCartBtn}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className={styles.occasions}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Gifts for Every Occasion</h2>
          <div className={styles.occasionsGrid}>
            {occasions.map((occasion) => (
              <div 
                key={occasion.id} 
                className={styles.occasionCard}
                onClick={() => Navigate(`/occasion/${occasion.name.toLowerCase()}`)}
              >
                <div className={styles.occasionIcon}>{occasion.icon}</div>
                <div className={styles.occasionInfo}>
                  <h3>{occasion.name}</h3>
                  <p>{occasion.description}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className={styles.collections}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Curated Collections</h2>
            <p className={styles.sectionSubtitle}>
              Handpicked selections for the discerning gift-giver
            </p>
          </div>
          
          <div className={styles.collectionsGrid}>
            {featuredCollections.map((collection) => (
              <div key={collection.id} className={styles.collectionCard}>
                <div className={styles.collectionImage}>
                  <span className={styles.collectionEmoji}>{collection.image}</span>
                </div>
                <div className={styles.collectionContent}>
                  <h3>{collection.name}</h3>
                  <p>{collection.description}</p>
                  <div className={styles.collectionMeta}>
                    <span>{collection.items}</span>
                    <button className={styles.exploreBtn}>
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Need Help Choosing?</h2>
            <p>Our gift experts are here to help you find the perfect present</p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtn}>Chat with Expert</button>
              <button className={styles.ctaBtnOutline}>Call Us Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className={styles.trustIndicators}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>⭐</span>
              <div>
                <h4>4.9/5 Stars</h4>
                <p>Customer Reviews</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🚚</span>
              <div>
                <h4>Free Shipping</h4>
                <p>Above 1200</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>💝</span>
              <div>
                <h4>Gift Wrap</h4>
                <p>Complimentary</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>↩️</span>
              <div>
                <h4>Easy Returns</h4>
                <p>7-Day Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;