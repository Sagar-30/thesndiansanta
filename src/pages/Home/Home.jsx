import React, { useState } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Birthdays');
  const navigate = useNavigate();

  const categoryTabs = ['Birthdays', 'Anniversaries', 'Weddings', 'New Baby', 'Just Because', 'Thank You', 'Congratulations', 'Corporate'];

  const giftSections = [
    {
      id: 1,
      title: 'For Her',
      items: [
        { 
          name: 'Luxury Handbag', 
          price: '$149', 
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Pearl Jewelry Set', 
          price: '$89', 
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    },
    {
      id: 2,
      title: 'For Him',
      items: [
        { 
          name: 'Leather Watch', 
          price: '$199', 
          image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Premium Grooming Kit', 
          price: '$75', 
          image: 'https://images.unsplash.com/photo-1594736797933-d0d69c3bc58d?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    },
    {
      id: 3,
      title: 'Experiences',
      items: [
        { 
          name: 'Spa Day Voucher', 
          price: '$120', 
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Adventure Sports', 
          price: '$150', 
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    },
    {
      id: 4,
      title: 'Gourmet',
      items: [
        { 
          name: 'Artisan Chocolate Box', 
          price: '$45', 
          image: 'https://images.unsplash.com/photo-1586796878722-1f7795136c79?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Premium Wine Collection', 
          price: '$85', 
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    },
    {
      id: 5,
      title: 'Home & Living',
      items: [
        { 
          name: 'Ceramic Dinner Set', 
          price: '$65', 
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Scented Candles Set', 
          price: '$35', 
          image: 'https://images.unsplash.com/photo-1606778303241-9cb3494d7e9b?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    },
    {
      id: 6,
      title: 'Personalized',
      items: [
        { 
          name: 'Custom Engraved Jewelry', 
          price: '$99', 
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop' 
        },
        { 
          name: 'Personalized Watch', 
          price: '$155', 
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop' 
        }
      ],
      bgColor: 'var(--pale-teal)'
    }
  ];

  const highlightedSections = [
    {
      id: 1,
      title: 'LAST-MINUTE GIFTS',
      subtitle: 'Express delivery available',
      icon: '⚡',
      bgColor: 'var(--light-gold)'
    },
    {
      id: 2,
      title: 'PERSONALISED PRESENTS',
      subtitle: 'Add a special touch',
      icon: '🎀',
      bgColor: 'var(--light-gold)'
    }
  ];

  // Gift Finder State
  const [giftFinder, setGiftFinder] = useState({
    recipient: '',
    occasion: '',
    budget: '',
    personalized: ''
  });

  const handleGiftFinderChange = (field, value) => {
    setGiftFinder(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFindGifts = () => {
    navigate('/search', { 
      state: { 
        filters: giftFinder 
      } 
    });
  };

  return (
    <div className={styles.home}>
      {/* Main Content - Full Width */}
      <div className={styles.container}>
        
        {/* Category Tabs */}
        <section className={styles.tabsSection}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Highlighted Sections */}
        <section className={styles.highlights}>
          {highlightedSections.map((section) => (
            <div 
              key={section.id} 
              className={styles.highlightCard}
              style={{ backgroundColor: section.bgColor }}
            >
              <div className={styles.highlightIcon}>{section.icon}</div>
              <div className={styles.highlightContent}>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
              </div>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          ))}
        </section>

        {/* Gift Categories Grid */}
        <section className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Gift Categories</h2>
          <div className={styles.categoriesGrid}>
            {giftSections.map((section) => (
              <div 
                key={section.id} 
                className={styles.categorySection}
              >
                <div className={styles.sectionHeader}>
                  <h3 className={styles.sectionName}>{section.title}</h3>
                  <button className={styles.moreBtn}>More</button>
                </div>
                <div className={styles.imagesGrid}>
                  {section.items.map((item, index) => (
                    <div key={index} className={styles.imageCard}>
                      <div 
                        className={styles.itemImage}
                        style={{ backgroundColor: section.bgColor }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className={styles.productImage}
                        />
                      </div>
                      <div className={styles.itemInfo}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Find Perfect Gift Section */}
        <section className={styles.giftFinderSection}>
          <div className={styles.giftFinderCard}>
            <h2 className={styles.finderTitle}>Find Your Perfect Gift</h2>
            <p className={styles.finderSubtitle}>Answer a few questions and we'll recommend the ideal gift</p>
            
            <div className={styles.finderForm}>
              <div className={styles.formGroup}>
                <label>Who are you gifting to?</label>
                <select 
                  value={giftFinder.recipient}
                  onChange={(e) => handleGiftFinderChange('recipient', e.target.value)}
                  className={styles.formSelect}
                >
                  <option value="">Select Recipient</option>
                  <option value="partner">Partner / Spouse</option>
                  <option value="parent">Parent</option>
                  <option value="friend">Friend</option>
                  <option value="colleague">Colleague</option>
                  <option value="child">Child</option>
                  <option value="sibling">Sibling</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Occasion</label>
                <select 
                  value={giftFinder.occasion}
                  onChange={(e) => handleGiftFinderChange('occasion', e.target.value)}
                  className={styles.formSelect}
                >
                  <option value="">Select Occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="wedding">Wedding</option>
                  <option value="graduation">Graduation</option>
                  <option value="thankyou">Thank You</option>
                  <option value="justbecause">Just Because</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Budget</label>
                <select 
                  value={giftFinder.budget}
                  onChange={(e) => handleGiftFinderChange('budget', e.target.value)}
                  className={styles.formSelect}
                >
                  <option value="">Select Budget</option>
                  <option value="under50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-500">$200 - $500</option>
                  <option value="over500">Over $500</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Personalization</label>
                <select 
                  value={giftFinder.personalized}
                  onChange={(e) => handleGiftFinderChange('personalized', e.target.value)}
                  className={styles.formSelect}
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes, personalize it</option>
                  <option value="no">No, ready-made is fine</option>
                  <option value="either">Either works</option>
                </select>
              </div>

              <button 
                className={styles.findGiftsBtn}
                onClick={handleFindGifts}
                disabled={!giftFinder.recipient || !giftFinder.occasion}
              >
                Find Perfect Gifts
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;