import React, { useState } from 'react';
import styles from './Categories.module.css';

const Categories = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones with Noise Cancellation",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.5,
      reviewCount: 1247,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      tags: ["Best Seller", "Limited Deal"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 31,
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Fitness Tracker Watch - Waterproof Activity Tracker",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.3,
      reviewCount: 892,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      tags: ["Climate Pledge Friendly"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 38,
      category: "electronics"
    },
    {
      id: 3,
      name: "Organic Cotton Bed Sheet Set - Queen Size 4 Piece",
      price: 45.99,
      originalPrice: 65.99,
      rating: 4.7,
      reviewCount: 2341,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      tags: ["Best Seller"],
      delivery: "FREE Delivery by Tomorrow",
      isPrime: true,
      discount: 30,
      category: "home"
    },
    {
      id: 4,
      name: "Professional Chef's Knife Set - 8 Piece Kitchen Knife Block",
      price: 129.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviewCount: 1567,
      image: "https://images.unsplash.com/photo-1594736797933-d0d69c3db9c1?w=400&h=300&fit=crop",
      tags: ["Limited Time Deal"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 35,
      category: "home"
    },
    {
      id: 5,
      name: "Wireless Gaming Mouse - RGB Ergonomic Design",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviewCount: 678,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      tags: ["Best Seller"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 30,
      category: "electronics"
    },
    {
      id: 6,
      name: "Yoga Mat Premium Non-Slip Exercise Mat",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviewCount: 3124,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      tags: ["Indian Santa's Choice"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 25,
      category: "sports"
    },
    {
      id: 7,
      name: "Stainless Steel Water Bottle - 32oz Insulated",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.5,
      reviewCount: 1890,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
      tags: ["Climate Pledge Friendly"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 29,
      category: "sports"
    },
    {
      id: 8,
      name: "Wireless Charging Station for Multiple Devices",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.2,
      reviewCount: 543,
      image: "https://images.unsplash.com/photo-1609592810793-abeb6c64b5c6?w=400&h=300&fit=crop",
      tags: ["New Arrival"],
      delivery: "FREE Delivery by Tomorrow",
      isPrime: true,
      discount: 33,
      category: "electronics"
    },
    {
      id: 9,
      name: "Professional Hair Dryer - Ionic Technology",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.6,
      reviewCount: 987,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop",
      tags: ["Best Seller"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 33,
      category: "beauty"
    },
    {
      id: 10,
      name: "Laptop Backpack with USB Charging Port",
      price: 42.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviewCount: 765,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      tags: ["Indian Santa's Choice"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 28,
      category: "electronics"
    },
    {
      id: 11,
      name: "Air Purifier for Home - HEPA Filter",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviewCount: 1123,
      image: "https://images.unsplash.com/photo-1581578021554-7a61e9b8c0c3?w=400&h=300&fit=crop",
      tags: ["Limited Deal"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 25,
      category: "home"
    },
    {
      id: 12,
      name: "Smart LED Light Bulbs - WiFi Color Changing",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.3,
      reviewCount: 432,
      image: "https://images.unsplash.com/photo-1558618666-fcd25856cd25?w=400&h=300&fit=crop",
      tags: ["New Arrival"],
      delivery: "FREE Delivery",
      isPrime: true,
      discount: 30,
      category: "electronics"
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'home', label: 'Home & Kitchen' },
    { id: 'sports', label: 'Sports & Fitness' },
    { id: 'beauty', label: 'Beauty' }
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'rating', label: 'Avg. Customer Review' },
    { id: 'newest', label: 'Newest Arrivals' }
  ];

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true;
    return product.category === activeFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={styles.starFull}>★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.starHalf}>★</span>);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>★</span>);
    }

    return stars;
  };

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        {/* Header Section */}
        {/* <div className={styles.header}>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span>Electronics</span>
            <span className={styles.breadcrumbSeparator}>›</span>
            <span className={styles.breadcrumbCurrent}>Headphones</span>
          </div>

          <h1 className={styles.title}>Headphones & Audio</h1>
          <p className={styles.subtitle}>5000 Products Found</p>
        </div> */}

        {/* Mobile Filter Section */}
        <div className={styles.mobileFilterSection}>
          <div className={styles.mobileFilterHeader}>
            <h3 className={styles.mobileFilterTitle}>Categories</h3>
            <button
              className={styles.mobileFilterToggle}
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {showMobileFilters && <div className={styles.mobileFilterButtons}>
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`${styles.mobileFilterButton} ${activeFilter === button.id ? styles.mobileFilterButtonActive : ''
                  }`}
                onClick={() => handleFilterClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>}
        </div>

        <div className={styles.content}>
          {/* Filters Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarContent}>
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Department</h3>
                <div className={styles.filterList}>
                  {filterButtons.map((button) => (
                    <button
                      key={button.id}
                      className={`${styles.filterItem} ${activeFilter === button.id ? styles.filterItemActive : ''
                        }`}
                      onClick={() => handleFilterClick(button.id)}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Avg. Customer Review</h3>
                <div className={styles.ratingFilters}>
                  {[4, 3, 2, 1].map(rating => (
                    <button key={rating} className={styles.ratingFilter}>
                      <div className={styles.ratingStars}>
                        {renderStars(rating)}
                      </div>
                      <span className={styles.ratingText}>& Up</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Brand</h3>
                <div className={styles.brandFilters}>
                  {['Sony', 'Bose', 'Sennheiser', 'JBL', 'Audio-Technica'].map(brand => (
                    <label key={brand} className={styles.brandFilter}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span className={styles.checkmark}></span>
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Price</h3>
                <div className={styles.priceFilters}>
                  <button className={styles.priceFilter}>Under $25</button>
                  <button className={styles.priceFilter}>$25 to $50</button>
                  <button className={styles.priceFilter}>$50 to $100</button>
                  <button className={styles.priceFilter}>$100 to $200</button>
                  <button className={styles.priceFilter}>$200 & Above</button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={styles.main}>
            {/* Toolbar */}
            <div className={styles.toolbar}>
              <div className={styles.sortContainer}>
                <span className={styles.sortLabel}>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.sortSelect}
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.resultsCount}>
                {sortedProducts.length} results
              </div>
            </div>

            {/* Products Grid */}
            <div className={styles.productsGrid}>
              {sortedProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    {product.discount && (
                      <div className={styles.discountBadge}>
                        Save {product.discount}%
                      </div>
                    )}
                  </div>

                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>

                    <div className={styles.ratingContainer}>
                      <div className={styles.stars}>
                        {renderStars(product.rating)}
                        <span className={styles.ratingValue}>{product.rating}</span>
                      </div>
                      <span className={styles.reviewCount}>({product.reviewCount})</span>
                    </div>

                    <div className={styles.priceContainer}>
                      <span className={styles.currentPrice}>₹{product.price}</span>
                      {product.originalPrice && (
                        <span className={styles.originalPrice}>₹{product.originalPrice}</span>
                      )}
                    </div>

                    <div className={styles.tagsContainer}>
                      {product.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* <div className={styles.deliveryInfo}>
                      {product.isPrime && (
                        <span className={styles.primeBadge}>Prime</span>
                      )}
                      <span className={styles.deliveryText}>{product.delivery}</span>
                    </div> */}

                    <button className={styles.addToCartButton}>
                      Add to Cart
                    </button>

                    <button className={styles.buyNowButton}>
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* <div className={styles.pagination}>
              <button className={styles.paginationButton}>Previous</button>
              <div className={styles.paginationPages}>
                <button className={`${styles.pageButton} ${styles.pageButtonActive}`}>1</button>
                <button className={styles.pageButton}>2</button>
                <button className={styles.pageButton}>3</button>
                <button className={styles.pageButton}>4</button>
                <button className={styles.pageButton}>5</button>
                <span className={styles.pageDots}>...</span>
                <button className={styles.pageButton}>20</button>
              </div>
              <button className={styles.paginationButton}>Next</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;