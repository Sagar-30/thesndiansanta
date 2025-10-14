import React, { useState, useRef, useEffect } from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Birthdays');
  const [trendingCurrentIndex, setTrendingCurrentIndex] = useState(0);
  const [bestSellingCurrentIndex, setBestSellingCurrentIndex] = useState(0);
  const [occasionCurrentIndex, setOccasionCurrentIndex] = useState(0);
  
  const trendingCarouselRef = useRef(null);
  const bestSellingCarouselRef = useRef(null);
  const occasionCarouselRef = useRef(null);
  
  const navigate = useNavigate();

  const categoryTabs = ['Birthdays', 'Anniversaries', 'Weddings', 'New Baby', 'Just Because', 'Thank You', 'Congratulations', 'Corporate'];

  // Occasion-based products data
  const occasionProducts = {
    'Birthdays': [
      {
        id: 1,
        name: 'Birthday Cake & Flowers',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=300&h=300&fit=crop',
        category: 'Cake & Flowers'
      },
      {
        id: 2,
        name: 'Personalized Birthday Gift',
        price: '$89',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop',
        category: 'Personalized'
      },
      {
        id: 3,
        name: 'Birthday Champagne Set',
        price: '$120',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=300&fit=crop',
        category: 'Gourmet'
      },
      {
        id: 4,
        name: 'Birthday Jewelry Box',
        price: '$150',
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
        category: 'Jewelry'
      },
      {
        id: 5,
        name: 'Birthday Celebration Hamper',
        price: '$75',
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop',
        category: 'Hampers'
      }
    ],
    'Anniversaries': [
      {
        id: 1,
        name: 'Romantic Rose Bouquet',
        price: '$85',
        image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=300&h=300&fit=crop',
        category: 'Flowers'
      },
      {
        id: 2,
        name: 'Anniversary Watch',
        price: '$199',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop',
        category: 'Accessories'
      },
      {
        id: 3,
        name: 'Love Letter Set',
        price: '$45',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
        category: 'Personalized'
      },
      {
        id: 4,
        name: 'Romantic Dinner Set',
        price: '$110',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
        category: 'Gourmet'
      },
      {
        id: 5,
        name: 'Love Theme Decor',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
        category: 'Home Decor'
      }
    ],
    'Weddings': [
      {
        id: 1,
        name: 'Wedding Gift Set',
        price: '$250',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=300&h=300&fit=crop',
        category: 'Premium'
      },
      {
        id: 2,
        name: 'Bridal Jewelry',
        price: '$180',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
        category: 'Jewelry'
      },
      {
        id: 3,
        name: 'Wedding Champagne',
        price: '$95',
        image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=300&fit=crop',
        category: 'Gourmet'
      },
      {
        id: 4,
        name: 'Couple Watches',
        price: '$320',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop',
        category: 'Accessories'
      },
      {
        id: 5,
        name: 'Home Starter Set',
        price: '$150',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
        category: 'Home'
      }
    ]
  };

  // Occasions Carousel Data
  const occasionsData = [
    {
      id: 1,
      name: 'Birthday',
      icon: '🎂',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
      description: 'Make their special day unforgettable'
    },
    {
      id: 2,
      name: 'Anniversary',
      icon: '💝',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      description: 'Celebrate love and togetherness'
    },
    {
      id: 3,
      name: 'Wedding',
      icon: '💒',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop',
      description: 'Perfect gifts for the newlyweds'
    },
    {
      id: 4,
      name: 'Valentine\'s Day',
      icon: '❤️',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
      description: 'Express your love beautifully'
    },
    {
      id: 5,
      name: 'Diwali',
      icon: '🪔',
      image: 'https://images.unsplash.com/photo-1604607053829-61656a193c86?w=400&h=300&fit=crop',
      description: 'Festive gifts for loved ones'
    },
    {
      id: 6,
      name: 'Thank You',
      icon: '🙏',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop',
      description: 'Show your appreciation'
    }
  ];

  const giftSections = [
    {
      id: 1,
      title: 'For Her',
      items: [
        { 
          name: 'Luxury Handbag', 
          price: '$149', 
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Pearl Jewelry Set', 
          price: '$89', 
          image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop' 
        }
      ]
    },
    {
      id: 2,
      title: 'For Him',
      items: [
        { 
          name: 'Leather Watch', 
          price: '$199', 
          image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Premium Grooming Kit', 
          price: '$75', 
          image: 'https://images.unsplash.com/photo-1594736797933-d0d69c3bc58d?w=300&h=300&fit=crop' 
        }
      ]
    },
    {
      id: 3,
      title: 'Experiences',
      items: [
        { 
          name: 'Spa Day Voucher', 
          price: '$120', 
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Adventure Sports', 
          price: '$150', 
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop' 
        }
      ]
    },
    {
      id: 4,
      title: 'Gourmet',
      items: [
        { 
          name: 'Artisan Chocolate Box', 
          price: '$45', 
          image: 'https://images.unsplash.com/photo-1586796878722-1f7795136c79?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Premium Wine Collection', 
          price: '$85', 
          image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=300&fit=crop' 
        }
      ]
    },
    {
      id: 5,
      title: 'Home & Living',
      items: [
        { 
          name: 'Ceramic Dinner Set', 
          price: '$65', 
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Scented Candles Set', 
          price: '$35', 
          image: 'https://images.unsplash.com/photo-1606778303241-9cb3494d7e9b?w=300&h=300&fit=crop' 
        }
      ]
    },
    {
      id: 6,
      title: 'Personalized',
      items: [
        { 
          name: 'Custom Engraved Jewelry', 
          price: '$99', 
          image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop' 
        },
        { 
          name: 'Personalized Watch', 
          price: '$155', 
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=300&fit=crop' 
        }
      ]
    }
  ];

  const highlightedSections = [
    {
      id: 1,
      title: 'LAST-MINUTE GIFTS',
      subtitle: 'Express delivery available',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'PERSONALISED PRESENTS',
      subtitle: 'Add a special touch',
      icon: '🎀'
    }
  ];

  const trendingProducts = [
    {
      id: 1,
      name: 'Rose Gold Watch',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=300&fit=crop',
      category: 'Accessories'
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e1?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Leather Journal',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      category: 'Stationery'
    },
    {
      id: 4,
      name: 'Scented Candle Set',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1606778303241-9cb3494d7e9b?w=300&h=300&fit=crop',
      category: 'Home'
    },
    {
      id: 5,
      name: 'Smart Fitness Band',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop',
      category: 'Fitness'
    }
  ];

  const bestSellingProducts = [
    {
      id: 1,
      name: 'Personalized Necklace',
      price: '$79',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop',
      category: 'Jewelry'
    },
    {
      id: 2,
      name: 'Gourmet Chocolate Box',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1586796878722-1f7795136c79?w=300&h=300&fit=crop',
      category: 'Gourmet'
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Yoga Mat Premium',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
      category: 'Fitness'
    },
    {
      id: 5,
      name: 'Designer Perfume',
      price: '$95',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
      category: 'Beauty'
    }
  ];

  // Gift Finder State
  const [giftFinder, setGiftFinder] = useState({
    recipient: '',
    occasion: '',
    budget: '',
    personalized: ''
  });

  // Get current occasion products based on active tab
  const currentOccasionProducts = occasionProducts[activeTab] || [];

  // Auto scroll functionality
  useEffect(() => {
    const trendingInterval = setInterval(() => {
      setTrendingCurrentIndex((prev) => (prev + 1) % trendingProducts.length);
    }, 4000);

    const bestSellingInterval = setInterval(() => {
      setBestSellingCurrentIndex((prev) => (prev + 1) % bestSellingProducts.length);
    }, 4500);

    const occasionInterval = setInterval(() => {
      setOccasionCurrentIndex((prev) => (prev + 1) % occasionsData.length);
    }, 5000);

    return () => {
      clearInterval(trendingInterval);
      clearInterval(bestSellingInterval);
      clearInterval(occasionInterval);
    };
  }, [trendingProducts.length, bestSellingProducts.length, occasionsData.length]);

  // Scroll to index functions
  const scrollToIndex = (carouselRef, index, setIndex, cardWidth = 280) => {
    if (carouselRef.current) {
      const scrollPosition = index * (cardWidth + 16);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setIndex(index);
    }
  };

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

  const nextTrending = () => {
    const nextIndex = (trendingCurrentIndex + 1) % trendingProducts.length;
    scrollToIndex(trendingCarouselRef, nextIndex, setTrendingCurrentIndex);
  };

  const prevTrending = () => {
    const prevIndex = trendingCurrentIndex === 0 ? trendingProducts.length - 1 : trendingCurrentIndex - 1;
    scrollToIndex(trendingCarouselRef, prevIndex, setTrendingCurrentIndex);
  };

  const nextBestSelling = () => {
    const nextIndex = (bestSellingCurrentIndex + 1) % bestSellingProducts.length;
    scrollToIndex(bestSellingCarouselRef, nextIndex, setBestSellingCurrentIndex);
  };

  const prevBestSelling = () => {
    const prevIndex = bestSellingCurrentIndex === 0 ? bestSellingProducts.length - 1 : bestSellingCurrentIndex - 1;
    scrollToIndex(bestSellingCarouselRef, prevIndex, setBestSellingCurrentIndex);
  };

  const nextOccasion = () => {
    const nextIndex = (occasionCurrentIndex + 1) % occasionsData.length;
    scrollToIndex(occasionCarouselRef, nextIndex, setOccasionCurrentIndex, 320);
  };

  const prevOccasion = () => {
    const prevIndex = occasionCurrentIndex === 0 ? occasionsData.length - 1 : occasionCurrentIndex - 1;
    scrollToIndex(occasionCarouselRef, prevIndex, setOccasionCurrentIndex, 320);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset carousel index when tab changes
    setOccasionCurrentIndex(0);
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        
        {/* Category Tabs */}
        <section className={styles.tabsSection}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FNP Style Occasions Carousel */}
        {/* <section className={styles.occasionsCarousel}>
          <div className={styles.carouselHeader}>
            <h2 className={styles.carouselTitle}>Tailored For Your Occasions</h2>
            <div className={styles.carouselControls}>
              <button className={styles.carouselBtn} onClick={prevOccasion}>
                ‹
              </button>
              <button className={styles.carouselBtn} onClick={nextOccasion}>
                ›
              </button>
            </div>
          </div>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
              <div 
                className={styles.carousel}
                ref={occasionCarouselRef}
              >
                {occasionsData.map((occasion) => (
                  <div key={occasion.id} className={styles.occasionCard}>
                    <div className={styles.occasionImage}>
                      <img src={occasion.image} alt={occasion.name} />
                      <div className={styles.occasionIcon}>{occasion.icon}</div>
                    </div>
                    <div className={styles.occasionContent}>
                      <h3 className={styles.occasionName}>{occasion.name}</h3>
                      <p className={styles.occasionDescription}>{occasion.description}</p>
                      <button className={styles.viewAllBtn}>
                        View All {occasion.name} Gifts
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          
          <div className={styles.carouselIndicators}>
            {occasionsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === occasionCurrentIndex ? styles.indicatorActive : ''
                }`}
                onClick={() => scrollToIndex(occasionCarouselRef, index, setOccasionCurrentIndex, 320)}
                aria-label={`Go to ${occasionsData[index].name}`}
              />
            ))}
          </div>
        </section> */}

        {/* Dynamic Occasion Products Carousel */}
        {currentOccasionProducts.length > 0 && (
          <section className={styles.occasionProductsSection}>

            <div className={styles.carouselWrapper}>
              <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                  {currentOccasionProducts.map((product) => (
                    <div key={product.id} className={styles.carouselCard}>
                      <div className={styles.productImage}>
                        <img src={product.image} alt={product.name} />
                        <button className={styles.wishlistBtn}>❤️</button>
                      </div>
                      <div className={styles.productInfo}>
                        <span className={styles.productCategory}>{product.category}</span>
                        <h4 className={styles.productName}>{product.name}</h4>
                        <span className={styles.productPrice}>{product.price}</span>
                        <button className={styles.addToCartBtn}>Add to Cart</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.sectionHeader}>
              {/* <h2 className={styles.sectionTitle}>Best {activeTab} Gifts</h2> */}
              <button className={styles.viewAllOccasionBtn}>
                View All {activeTab} Gifts
              </button>
            </div>
          </section>
        )}

        {/* Highlighted Sections */}
        {/* <section className={styles.highlights}>
          {highlightedSections.map((section) => (
            <div 
              key={section.id} 
              className={styles.highlightCard}
            >
              <div className={styles.highlightIcon}>{section.icon}</div>
              <div className={styles.highlightContent}>
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
              </div>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          ))}
        </section> */}

        {/* Trending Products Carousel */}
        <section className={styles.carouselSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trending Now</h2>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
              <div 
                className={styles.carousel}
                ref={trendingCarouselRef}
              >
                {trendingProducts.map((product) => (
                  <div key={product.id} className={styles.carouselCard}>
                    <div className={styles.productImage}>
                      <img src={product.image} alt={product.name} />
                      <button className={styles.wishlistBtn}>❤️</button>
                    </div>
                    <div className={styles.productInfo}>
                      <span className={styles.productCategory}>{product.category}</span>
                      <h4 className={styles.productName}>{product.name}</h4>
                      <span className={styles.productPrice}>{product.price}</span>
                      <button className={styles.addToCartBtn}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.carouselNavigation}>
            <button 
              className={styles.navBtn}
              onClick={prevTrending}
              aria-label="Previous trending products"
            >
              ‹
            </button>
            <div className={styles.carouselIndicators}>
              {trendingProducts.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === trendingCurrentIndex ? styles.indicatorActive : ''
                  }`}
                  onClick={() => scrollToIndex(trendingCarouselRef, index, setTrendingCurrentIndex)}
                  aria-label={`Go to trending product ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className={styles.navBtn}
              onClick={nextTrending}
              aria-label="Next trending products"
            >
              ›
            </button>
          </div>
        </section>

        {/* Best Selling Products Carousel */}
        <section className={styles.carouselSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Best Sellers</h2>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
          
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer}>
              <div 
                className={styles.carousel}
                ref={bestSellingCarouselRef}
              >
                {bestSellingProducts.map((product) => (
                  <div key={product.id} className={styles.carouselCard}>
                    <div className={styles.productImage}>
                      <img src={product.image} alt={product.name} />
                      <button className={styles.wishlistBtn}>❤️</button>
                    </div>
                    <div className={styles.productInfo}>
                      <span className={styles.productCategory}>{product.category}</span>
                      <h4 className={styles.productName}>{product.name}</h4>
                      <span className={styles.productPrice}>{product.price}</span>
                      <button className={styles.addToCartBtn}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.carouselNavigation}>
            <button 
              className={styles.navBtn}
              onClick={prevBestSelling}
              aria-label="Previous best selling products"
            >
              ‹
            </button>
            <div className={styles.carouselIndicators}>
              {bestSellingProducts.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === bestSellingCurrentIndex ? styles.indicatorActive : ''
                  }`}
                  onClick={() => scrollToIndex(bestSellingCarouselRef, index, setBestSellingCurrentIndex)}
                  aria-label={`Go to best seller ${index + 1}`}
                />
              ))}
            </div>
            <button 
              className={styles.navBtn}
              onClick={nextBestSelling}
              aria-label="Next best selling products"
            >
              ›
            </button>
          </div>
        </section>

        {/* Gift Categories Grid */}
        <section className={styles.categoriesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gift Categories</h2>
          </div>
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
                      <div className={styles.itemImage}>
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