import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Collections.module.css';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const collections = [
    {
      id: 1,
      name: "Timeless Elegance",
      description: "Classic pieces that never go out of style, crafted with enduring quality and sophistication.",
      items: 24,
      image: "🕰️",
      category: "classic",
      featured: true
    },
    {
      id: 2,
      name: "Modern Luxury",
      description: "Contemporary designs for the discerning, featuring clean lines and innovative materials.",
      items: 18,
      image: "✨",
      category: "modern",
      featured: true
    },
    {
      id: 3,
      name: "Artisan Crafted",
      description: "Handmade pieces with exceptional detail, each telling a story of traditional craftsmanship.",
      items: 16,
      image: "👐",
      category: "artisan",
      featured: false
    },
    {
      id: 4,
      name: "Heritage Pieces",
      description: "Items with history and character, inspired by rich cultural traditions and timeless aesthetics.",
      items: 22,
      image: "🏺",
      category: "heritage",
      featured: true
    },
    {
      id: 5,
      name: "Corporate Gifting",
      description: "Sophisticated gifts for business partners and clients that make lasting impressions.",
      items: 15,
      image: "🏢",
      category: "corporate",
      featured: false
    },
    {
      id: 6,
      name: "Festive Collection",
      description: "Celebratory items for special occasions, designed to make every moment memorable.",
      items: 28,
      image: "🎄",
      category: "festive",
      featured: false
    },
    {
      id: 7,
      name: "Personalized Luxury",
      description: "Custom-made pieces that can be tailored to individual preferences and occasions.",
      items: 12,
      image: "💝",
      category: "personalized",
      featured: true
    },
    {
      id: 8,
      name: "Sustainable Luxury",
      description: "Eco-conscious items that combine luxury with environmental responsibility.",
      items: 14,
      image: "🌿",
      category: "sustainable",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'featured', name: 'Featured', count: collections.filter(c => c.featured).length },
    { id: 'classic', name: 'Classic', count: collections.filter(c => c.category === 'classic').length },
    { id: 'modern', name: 'Modern', count: collections.filter(c => c.category === 'modern').length },
    { id: 'artisan', name: 'Artisan', count: collections.filter(c => c.category === 'artisan').length },
    { id: 'heritage', name: 'Heritage', count: collections.filter(c => c.category === 'heritage').length }
  ];

  const filteredCollections = collections.filter(collection => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return collection.featured;
    return collection.category === activeFilter;
  });

  const sortedCollections = [...filteredCollections].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'items':
        return b.items - a.items;
      case 'featured':
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId);
    setShowMobileFilters(false);
  };

  return (
    <div className={styles.collectionsPage}>
      <div className={styles.container}>
        {/* Hero Section - Hidden on mobile */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>Luxury Curated</span>
            </div>
            <h1 className={styles.heroTitle}>
              Discover Our <span className={styles.titleAccent}>Collections</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Explore carefully curated gift collections, each designed around specific themes 
              and occasions. From timeless classics to contemporary masterpieces, find the 
              perfect expression of luxury.
            </p>
          </div>
        </section>

        {/* Mobile Filter Header - Only visible on mobile */}
        <section className={styles.mobileFilterHeader}>
          <div className={styles.mobileFilterTop}>
            <h1 className={styles.mobileTitle}>Collections</h1>
            <button 
              className={styles.mobileFilterToggle}
              onClick={toggleMobileFilters}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Filters
              {activeFilter !== 'all' && (
                <span className={styles.activeFilterDot}></span>
              )}
            </button>
          </div>
          
          {/* Active filter display */}
          {activeFilter !== 'all' && (
            <div className={styles.activeFilterDisplay}>
              <span className={styles.activeFilterText}>
                {categories.find(c => c.id === activeFilter)?.name}
              </span>
              <button 
                className={styles.clearFilter}
                onClick={() => setActiveFilter('all')}
              >
                Clear
              </button>
            </div>
          )}
        </section>

        {/* Mobile Filter Overlay */}
        {showMobileFilters && (
          <div className={styles.mobileFilterOverlay} onClick={() => setShowMobileFilters(false)}>
            <div className={styles.mobileFilterContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.mobileFilterHeaderInner}>
                <h3>Filter Collections</h3>
                <button 
                  className={styles.closeFilters}
                  onClick={() => setShowMobileFilters(false)}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              
              <div className={styles.mobileCategoryFilters}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`${styles.mobileFilterButton} ${
                      activeFilter === category.id ? styles.mobileFilterButtonActive : ''
                    }`}
                    onClick={() => handleFilterSelect(category.id)}
                  >
                    <span className={styles.mobileFilterName}>{category.name}</span>
                    <span className={styles.mobileFilterCount}>{category.count}</span>
                  </button>
                ))}
              </div>

              <div className={styles.mobileSortSection}>
                <label className={styles.mobileSortLabel}>Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.mobileSortSelect}
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name</option>
                  <option value="items">Number of Items</option>
                </select>
              </div>

              <button 
                className={styles.applyFilters}
                onClick={() => setShowMobileFilters(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Filters and Sorting - Desktop */}
        <section className={styles.filtersSection}>
          <div className={styles.filtersContainer}>
            {/* Category Filters */}
            <div className={styles.categoryFilters}>
              <div className={styles.filterLabel}>Browse by Category</div>
              <div className={styles.filterButtons}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`${styles.filterButton} ${
                      activeFilter === category.id ? styles.filterButtonActive : ''
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                    <span className={styles.filterCount}>({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className={styles.sortContainer}>
              <label htmlFor="sort" className={styles.sortLabel}>Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="featured">Featured</option>
                <option value="name">Name</option>
                <option value="items">Number of Items</option>
              </select>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className={styles.collectionsSection}>
          <div className={styles.collectionsHeader}>
            <h2 className={styles.collectionsTitle}>
              {activeFilter === 'all' ? 'All Collections' : 
               activeFilter === 'featured' ? 'Featured Collections' : 
               categories.find(c => c.id === activeFilter)?.name}
            </h2>
            <p className={styles.collectionsCount}>
              {sortedCollections.length} collection{sortedCollections.length !== 1 ? 's' : ''}
            </p>
          </div>

          {sortedCollections.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3 className={styles.noResultsTitle}>No collections found</h3>
              <p className={styles.noResultsDescription}>
                Try adjusting your filters to see more collections.
              </p>
              <button 
                className={styles.resetFilters}
                onClick={() => setActiveFilter('all')}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className={styles.collectionsGrid}>
              {sortedCollections.map(collection => (
                <div key={collection.id} className={styles.collectionCard}>
                  {collection.featured && (
                    <div className={styles.featuredBadge}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                              fill="currentColor"/>
                      </svg>
                      Featured
                    </div>
                  )}
                  
                  <div className={styles.collectionImage}>
                    <span className={styles.collectionIcon}>{collection.image}</span>
                  </div>

                  <div className={styles.collectionContent}>
                    <div className={styles.collectionHeader}>
                      <h3 className={styles.collectionName}>{collection.name}</h3>
                      <div className={styles.itemsCount}>{collection.items} items</div>
                    </div>
                    
                    <p className={styles.collectionDescription}>
                      {collection.description}
                    </p>

                    <div className={styles.collectionMeta}>
                      <div className={styles.collectionCategory}>
                        {collection.category.charAt(0).toUpperCase() + collection.category.slice(1)}
                      </div>
                    </div>
                  </div>

                  <div className={styles.collectionActions}>
                    <Link 
                      to={`/collection/${collection.id}`} 
                      className={styles.exploreButton}
                    >
                      Explore Collection
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </Link>
                    
                    <button className={styles.quickAdd}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              fill="none"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Can't Find What You're Looking For?
            </h2>
            <p className={styles.ctaDescription}>
              Our luxury concierge team is here to help you find or create the perfect gift. 
              From personalized recommendations to bespoke creations, we're dedicated to 
              making your gifting experience exceptional.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Contact US
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collections;