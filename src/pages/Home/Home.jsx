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
      price: "$280",
      description: "Handcrafted leather with gold foil detailing",
      image: "📔",
      category: "Writing"
    },
    {
      id: 2,
      name: "Crystal Decanter Set",
      price: "$450",
      description: "Lead-free crystal with walnut base",
      image: "🍷",
      category: "Barware"
    },
    {
      id: 3,
      name: "Cashmere Travel Set",
      price: "$320",
      description: "Ultra-soft cashmere blanket and pillow",
      image: "🧣",
      category: "Travel"
    },
    {
      id: 4,
      name: "Artisan Ceramic Set",
      price: "$190",
      description: "Hand-thrown ceramics with mineral glaze",
      image: "🍶",
      category: "Home"
    },
    {
      id: 5,
      name: "Wooden Watch Box",
      price: "$380",
      description: "Solid walnut with velvet lining",
      image: "⌚",
      category: "Accessories"
    },
    {
      id: 6,
      name: "Brass Desk Set",
      price: "$520",
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

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Luxury Brand Director",
      text: "The attention to detail and quality of materials is exceptional. Each piece feels like it was made just for me.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Rajiv Malhotra",
      role: "Hotel Chain Owner",
      text: "Our corporate clients consistently praise the sophistication of gifts from Indian Santa. It elevates every occasion.",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Art Collector",
      text: "Finally, a gifting service that understands true luxury isn't about being loud, but about being meaningful.",
      avatar: "👩‍🎨"
    }
  ];

  const values = [
    {
      id: 1,
      title: "Quality Craftsmanship",
      description: "Every item is selected for its exceptional quality and attention to detail.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Timeless Design",
      description: "We focus on pieces that transcend trends and become lifelong treasures.",
      icon: "⏳"
    },
    {
      id: 3,
      title: "Personal Service",
      description: "Our concierge team ensures every gift is perfectly matched to its recipient.",
      icon: "🤝"
    }
  ];

  const Navigate = useNavigate();

  return (
    <div className={styles.minimalHome}>
      {/* Hero Section */}
      <section className={styles.minimalHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            {/* <span>Established 2025</span> */}
            <span>Where Elegance Meets Emotion</span> 
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Timeless Gifts</span>
            <span className={styles.titleLine}>Made for</span>
            <span className={styles.titleAccent}>Every Occasion</span>
          </h1>

          <p className={styles.heroSubtitle}>
            From birthdays to milestones, explore elegant gifts that blend craftsmanship with meaning.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryCta} onClick={() =>{ Navigate('/collections')}}>
              <span>Explore Collections</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Personalize Your Gift */}
            <button className={styles.secondaryCta}>
              Craft Your Story
            </button>
          </div>
        </div>

        {/* Hero Indicators */}
        {/* <div className={styles.heroIndicators}>
          <div className={styles.indicator}>
            <div className={styles.indicatorNumber}>500+</div>
            <div className={styles.indicatorText}>Luxury Items</div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.indicatorNumber}>Global</div>
            <div className={styles.indicatorText}>Delivery</div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.indicatorNumber}>24/7</div>
            <div className={styles.indicatorText}>Concierge</div>
          </div>
        </div> */}
      </section>

      {/* Featured Collections */}
      <section className={styles.featuredCollections}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Curated Collections</h2>
            <p className={styles.sectionSubtitle}>
              Each collection is thoughtfully assembled around themes of timeless elegance and exceptional craftsmanship.
            </p>
          </div>

          <div className={styles.collectionsGrid}>
            {featuredCollections.map((collection) => (
              <div key={collection.id} className={styles.collectionCard}>
                <div className={styles.collectionImage}>
                  <span className={styles.collectionIcon}>{collection.image}</span>
                </div>
                <div className={styles.collectionContent}>
                  <h3 className={styles.collectionName}>{collection.name}</h3>
                  <p className={styles.collectionDescription}>{collection.description}</p>
                  <div className={styles.collectionMeta}>
                    <span className={styles.collectionItems}>{collection.items}</span>
                    <button className={styles.collectionButton}>
                      Explore
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Products */}
      <section className={styles.luxuryProducts}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Exceptional Selections</h2>
            <p className={styles.sectionSubtitle}>
              Handpicked items that embody the essence of understated luxury and lasting quality.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {luxuryProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <span className={styles.productIcon}>{product.image}</span>
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productCategory}>{product.category}</div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price}</span>
                    <button className={styles.productButton}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.productsCta}>
            <button className={styles.viewAllButton}>
              View Complete Collection
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className={styles.occasions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>For Every Moment</h2>
            <p className={styles.sectionSubtitle}>
              Thoughtful gifts tailored to life's most meaningful occasions.
            </p>
          </div>

          <div className={styles.occasionsGrid}>
            {occasions.map((occasion) => (
              <div key={occasion.id} className={styles.occasionCard}>
                <div className={styles.occasionIcon}>{occasion.icon}</div>
                <div className={styles.occasionContent}>
                  <h3 className={styles.occasionName}>{occasion.name}</h3>
                  <p className={styles.occasionDescription}>{occasion.description}</p>
                </div>
                <button className={styles.occasionButton}>
                  Explore Gifts
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trusted by Connoisseurs</h2>
            <p className={styles.sectionSubtitle}>
              Discover why discerning individuals choose Indian Santa for their luxury gifting needs.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{testimonial.avatar}</div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
            <p className={styles.sectionSubtitle}>
              We believe true luxury lies in quality, craftsmanship, and meaningful connections.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.id} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Begin Your Journey <br />
              to Extraordinary Gifting
            </h2>
            <p className={styles.ctaSubtitle}>
              Experience the difference that thoughtful curation and exceptional quality can make.
              Let us help you find the perfect expression of your appreciation.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimary}>
                Start Exploring
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className={styles.ctaSecondary}>
                Customize with love
              </button>
            </div>
            <div className={styles.ctaFeatures}>
              <div className={styles.feature}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Complimentary Gift Wrapping</span>
              </div>
              <div className={styles.feature}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 15a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6z" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 9l-9 6-9-6" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Global Shipping</span>
              </div>
              <div className={styles.feature}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15l4-4m0 0l-4-4m4 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;