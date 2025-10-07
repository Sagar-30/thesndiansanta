import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Occasions.module.css';

const Occasions = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const occasions = [
    {
      id: 1,
      name: "Anniversary",
      description: "Celebrate lasting love and cherished memories with thoughtful gifts that honor your journey together.",
      image: "💝",
      category: "romantic",
      items: 45,
      featured: true,
      color: "teal"
    },
    {
      id: 2,
      name: "Birthday",
      description: "Make their special day unforgettable with personalized gifts that reflect their unique personality.",
      image: "🎂",
      category: "personal",
      items: 62,
      featured: true,
      color: "gold"
    },
    {
      id: 3,
      name: "Wedding",
      description: "Honor new beginnings with elegant gifts for the happy couple starting their life together.",
      image: "💒",
      category: "romantic",
      items: 38,
      featured: false,
      color: "teal"
    },
    {
      id: 4,
      name: "Corporate Gifting",
      description: "Strengthen business relationships with sophisticated gifts that show appreciation and professionalism.",
      image: "🏢",
      category: "professional",
      items: 28,
      featured: true,
      color: "gold"
    },
    {
      id: 5,
      name: "Graduation",
      description: "Celebrate academic achievements and new beginnings with meaningful gifts that inspire future success.",
      image: "🎓",
      category: "achievement",
      items: 34,
      featured: false,
      color: "teal"
    },
    {
      id: 6,
      name: "Housewarming",
      description: "Welcome friends and family to their new home with thoughtful gifts that make their space special.",
      image: "🏠",
      category: "personal",
      items: 41,
      featured: false,
      color: "gold"
    },
    {
      id: 7,
      name: "Baby Shower",
      description: "Celebrate new life with adorable and practical gifts for the expecting parents and their little one.",
      image: "👶",
      category: "family",
      items: 29,
      featured: true,
      color: "teal"
    },
    {
      id: 8,
      name: "Festive Seasons",
      description: "Spread holiday cheer with seasonal gifts that capture the magic of celebrations throughout the year.",
      image: "🎄",
      category: "seasonal",
      items: 51,
      featured: false,
      color: "gold"
    },
    {
      id: 9,
      name: "Thank You",
      description: "Express gratitude with thoughtful tokens of appreciation that speak from the heart.",
      image: "🙏",
      category: "personal",
      items: 23,
      featured: false,
      color: "teal"
    },
    {
      id: 10,
      name: "Retirement",
      description: "Honor a lifetime of work and celebrate new beginnings with meaningful retirement gifts.",
      image: "🌴",
      category: "achievement",
      items: 19,
      featured: false,
      color: "gold"
    },
    {
      id: 11,
      name: "Engagement",
      description: "Celebrate the promise of forever with romantic gifts that mark this special milestone.",
      image: "💍",
      category: "romantic",
      items: 27,
      featured: false,
      color: "teal"
    },
    {
      id: 12,
      name: "Promotion",
      description: "Acknowledge professional achievements with sophisticated gifts that celebrate career success.",
      image: "📈",
      category: "professional",
      items: 22,
      featured: false,
      color: "gold"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Occasions', count: occasions.length },
    { id: 'romantic', name: 'Romantic', count: occasions.filter(o => o.category === 'romantic').length },
    { id: 'personal', name: 'Personal', count: occasions.filter(o => o.category === 'personal').length },
    { id: 'professional', name: 'Professional', count: occasions.filter(o => o.category === 'professional').length },
    { id: 'achievement', name: 'Achievement', count: occasions.filter(o => o.category === 'achievement').length },
    { id: 'family', name: 'Family', count: occasions.filter(o => o.category === 'family').length },
    { id: 'seasonal', name: 'Seasonal', count: occasions.filter(o => o.category === 'seasonal').length }
  ];

  const filteredOccasions = occasions.filter(occasion => {
    if (activeCategory === 'all') return true;
    return occasion.category === activeCategory;
  });

  const featuredOccasions = occasions.filter(occasion => occasion.featured);

  return (
    <div className={styles.occasionsPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>Perfect Gifts for Every Moment</span>
            </div>
            <h1 className={styles.heroTitle}>
              Find Gifts for <span className={styles.titleAccent}>Every Occasion</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover thoughtfully curated gift collections tailored to life's most meaningful moments. 
              From celebrations of love to professional milestones, find the perfect expression for every occasion.
            </p>
          </div>
        </section>

        {/* Featured Occasions */}
        {featuredOccasions.length > 0 && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Occasions</h2>
              <p className={styles.sectionSubtitle}>
                Our most popular gift categories for special moments
              </p>
            </div>
            
            <div className={styles.featuredGrid}>
              {featuredOccasions.map(occasion => (
                <div key={occasion.id} className={`${styles.featuredCard} ${styles[occasion.color]}`}>
                  <div className={styles.featuredContent}>
                    <div className={styles.featuredIcon}>{occasion.image}</div>
                    <h3 className={styles.featuredName}>{occasion.name}</h3>
                    <p className={styles.featuredDescription}>{occasion.description}</p>
                    <div className={styles.featuredMeta}>
                      <span className={styles.itemCount}>{occasion.items} gift options</span>
                      <Link 
                        to={`/occasion/${occasion.id}`} 
                        className={styles.exploreLink}
                      >
                        Explore Gifts
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category Filters */}
        <section className={styles.filtersSection}>
          <div className={styles.filtersContainer}>
            <div className={styles.filterLabel}>Browse by Category</div>
            <div className={styles.filterButtons}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.filterButton} ${
                    activeCategory === category.id ? styles.filterButtonActive : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                  <span className={styles.filterCount}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Occasions Grid */}
        <section className={styles.occasionsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {activeCategory === 'all' ? 'All Occasions' : 
               categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className={styles.sectionCount}>
              {filteredOccasions.length} occasion{filteredOccasions.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredOccasions.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🎁</div>
              <h3 className={styles.noResultsTitle}>No occasions found</h3>
              <p className={styles.noResultsDescription}>
                Try selecting a different category to see more occasions.
              </p>
              <button 
                className={styles.resetFilters}
                onClick={() => setActiveCategory('all')}
              >
                Show All Occasions
              </button>
            </div>
          ) : (
            <div className={styles.occasionsGrid}>
              {filteredOccasions.map(occasion => (
                <div key={occasion.id} className={styles.occasionCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.occasionImage}>
                      <span className={styles.occasionIcon}>{occasion.image}</span>
                    </div>
                    {occasion.featured && (
                      <div className={styles.featuredBadge}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                                fill="currentColor"/>
                        </svg>
                        Featured
                      </div>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.occasionName}>{occasion.name}</h3>
                    <p className={styles.occasionDescription}>{occasion.description}</p>
                    
                    <div className={styles.occasionMeta}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Gift Options</span>
                        <span className={styles.metaValue}>{occasion.items}+</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Category</span>
                        <span className={styles.metaCategory}>
                          {occasion.category.charAt(0).toUpperCase() + occasion.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <Link 
                      to={`/occasion/${occasion.id}`} 
                      className={styles.primaryButton}
                    >
                      View Gifts
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </Link>
                    
                    <button className={styles.secondaryButton}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              fill="none"/>
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Gift Guide CTA */}
        <section className={styles.giftGuideSection}>
          <div className={styles.giftGuideContent}>
            <div className={styles.guideText}>
              <h2 className={styles.guideTitle}>Need Help Choosing?</h2>
              <p className={styles.guideDescription}>
                Our comprehensive gift guide helps you find the perfect present based on 
                personality, relationship, and budget. Let us take the guesswork out of gifting.
              </p>
              <div className={styles.guideActions}>
                <Link to="/gift-guide" className={styles.guidePrimary}>
                  Explore Gift Guide
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
                <Link to="/concierge" className={styles.guideSecondary}>
                  Personal Consultation
                </Link>
              </div>
            </div>
            <div className={styles.guideVisual}>
              <div className={styles.guideIcons}>
                <div className={styles.guideIcon}>💝</div>
                <div className={styles.guideIcon}>🎁</div>
                <div className={styles.guideIcon}>✨</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className={styles.tipsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gift Giving Tips</h2>
            <p className={styles.sectionSubtitle}>
              Expert advice for choosing the perfect gift every time
            </p>
          </div>
          
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🎯</div>
              <h3 className={styles.tipTitle}>Consider Their Interests</h3>
              <p className={styles.tipDescription}>
                Think about their hobbies, passions, and lifestyle. A gift that aligns with 
                their interests shows you truly know and appreciate them.
              </p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>⏰</div>
              <h3 className={styles.tipTitle}>Plan Ahead</h3>
              <p className={styles.tipDescription}>
                Give yourself enough time to find the perfect gift. Rushed decisions often 
                lead to less thoughtful presents.
              </p>
            </div>
            
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>💌</div>
              <h3 className={styles.tipTitle}>Add a Personal Touch</h3>
              <p className={styles.tipDescription}>
                Include a heartfelt note or consider personalization. The thought and effort 
                behind the gift often matter more than the price tag.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Occasions;