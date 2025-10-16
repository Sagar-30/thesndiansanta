import React from 'react';
import { Helmet } from "react-helmet"
import styles from './Home.module.css';

// SEO Component for better search engine visibility
const SEO = () => (
  <Helmet>
    <title>The Indian Santa - India's First Patakha Hamper | Unique Gift Experiences</title>
    <meta name="description" content="Make their day explode with joy. Thoughtfully curated surprises, personalized gifts for birthdays, anniversaries, Diwali & all special occasions. Rated 4.8/5 by 4,62,543 customers." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="patakha hamper, Diwali gifts, birthday gifts, anniversary surprises, custom hampers India" />
    <meta property="og:title" content="The Indian Santa - India's First Patakha Hamper" />
    <meta property="og:description" content="Thoughtfully curated surprises, personalized just for them" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://www.oyehappy.com/" />
  </Helmet>
);

const images = {
  // Icons
  Diwali: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop',
  anniversary: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=200&fit=crop',
  birthday: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=200&h=200&fit=crop',
  boyfriend: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  customHampers: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=200&h=200&fit=crop',
  girlfriend: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop',
  homeDecor: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop',
  
  // Occasions
  anniversaryCelebration: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop',
  birthdayParty: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop',
  honeymoon: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=200&fit=crop',
  houseWarming: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
  babyShower: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
  
  // Products
  ayodhyaDiwali: 'https://images.unsplash.com/photo-1606996252427-1588ab5c101a?w=300&h=200&fit=crop',
  shubhDeepawali: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=200&fit=crop',
  diyPatakha: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
  flavoursDiwali: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=200&fit=crop',
  
  // Events
  bossDay: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=150&fit=crop',
  dhanteras: 'https://images.unsplash.com/photo-1606996252427-1588ab5c101a?w=200&h=150&fit=crop',
  diwali: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=200&h=150&fit=crop',
  bhaiDooj: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&h=150&fit=crop',
  halloween: 'https://images.unsplash.com/photo-1572860177022-8fda925e5a0e?w=200&h=150&fit=crop',
  
  // Hampers
  dinoCake: 'https://images.unsplash.com/photo-1559715541-5dae8e1382ba?w=300&h=200&fit=crop',
  diwaliCookies: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=300&h=200&fit=crop',
  floralBouquet: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=300&h=200&fit=crop',
  sparklingTraditions: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
  
  // Relationships
  men: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  women: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  kids: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  friend: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  girlfriend: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  boyfriend: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  wife: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  husband: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  
  // Promos
  cakeCreations: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=400&h=250&fit=crop',
  lovelyGifts: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=250&fit=crop',
  
  // Home & Living
  homeDecor: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
  photoFrames: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
  kitchenDining: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
  
  // Gift Finder
  occasion: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop',
  giftType: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=200&fit=crop',
  inspiration: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop',
  
  // Features
  dataPrivacy: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop',
  happiness: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=100&h=100&fit=crop',
  securePayments: 'https://images.unsplash.com/photo-1550565360-6986c92d8d51?w=100&h=100&fit=crop',
  madeInIndia: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=100&h=100&fit=crop'
};

// Trust Indicator Component
const TrustIndicator = () => (
  <div className={styles.trustIndicatorMain}> 
  <div className={styles.trustIndicator}>
    <span className={styles.trustIndicatorSpan}>
      ⭐ Rated 4.8 / 5 | Trusted by 4,62,543 Happy Customers
    </span>
  </div>
  </div>
);

// Reusable Section Component with Mobile Carousel
const Section = ({ title, items, type = 'grid', ariaLabelledBy }) => (
  <section className={styles.section} aria-labelledby={ariaLabelledBy}>
    <header className={styles.sectionHeader}>
      <h2 id={ariaLabelledBy}>{title}</h2>
    </header>
    
    {/* Mobile Carousel */}
    <div className={styles.scrollCarousel}>
      {items.map((item, index) => (
        <article key={index} className={styles.mobileCard}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div className={styles.mobileCardInfo}>
            <h3 className={styles.mobileCardTitle}>{item.title}</h3>
            {item.meta && <p className={styles.mobileCardMeta}>{item.meta}</p>}
          </div>
        </article>
      ))}
    </div>
    
    {/* Desktop Grid */}
    <div className={styles.grid}>
      {items.map((item, index) => (
        <article key={index} className={styles.card}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div className={styles.info}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.meta && <p className={styles.meta}>{item.meta}</p>}
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Products Section Component with Mobile Carousel
const ProductsSection = () => (
  <section className={styles.productsSection} aria-labelledby="featured-collections">
    <header className={styles.sectionHeader}>
      <h2 id="featured-collections">Featured Collections</h2>
    </header>
    <div className={styles.tabs} role="tablist">
      <button className={styles.activeTab} role="tab" aria-selected="true">NEW</button>
      <button className={styles.tab} role="tab" aria-selected="false">TRENDING</button>
      <button className={styles.tab} role="tab" aria-selected="false">BESTSELLER</button>
    </div>

    {/* Mobile Carousel */}
    <div className={styles.scrollCarousel}>
      {[
        { name: 'Ayodhya ki Diwali Hamper', price: '₹1,290', original: '₹1,790', image: images.ayodhyaDiwali, alt: 'Ayodhya ki Diwali Hamper with traditional elements' },
        { name: 'Shubh Deepawali Hamper', price: '₹1,490', original: '₹1,790', image: images.shubhDeepawali, alt: 'Shubh Deepawali gift hamper' },
        { name: 'DIY Patakha Box', price: '₹399', original: '₹499', image: images.diyPatakha, alt: 'DIY Patakha Box for festive celebrations' },
        { name: 'Flavours of Diwali Hamper', price: '₹1,690', original: '₹1,790', image: images.flavoursDiwali, alt: 'Flavours of Diwali food hamper' }
      ].map((product, index) => (
        <article key={index} className={styles.mobileProductCard}>
          <img src={product.image} alt={product.alt} loading="lazy" />
          <div className={styles.mobileProductInfo}>
            <h3>{product.name}</h3>
            <p className={styles.mobileProductPrice}>
              {product.price}
              <span className={styles.mobileOriginalPrice}>{product.original}</span>
            </p>
          </div>
        </article>
      ))}
    </div>

    {/* Desktop Grid */}
    <div className={styles.productsGrid}>
      {[
        { name: 'Ayodhya ki Diwali Hamper', price: '₹1,290', original: '₹1,790', image: images.ayodhyaDiwali, alt: 'Ayodhya ki Diwali Hamper with traditional elements' },
        { name: 'Shubh Deepawali Hamper', price: '₹1,490', original: '₹1,790', image: images.shubhDeepawali, alt: 'Shubh Deepawali gift hamper' },
        { name: 'DIY Patakha Box', price: '₹399', original: '₹499', image: images.diyPatakha, alt: 'DIY Patakha Box for festive celebrations' },
        { name: 'Flavours of Diwali Hamper', price: '₹1,690', original: '₹1,790', image: images.flavoursDiwali, alt: 'Flavours of Diwali food hamper' }
      ].map((product, index) => (
        <article key={index} className={styles.productCard}>
          <img src={product.image} alt={product.alt} loading="lazy" />
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <p className={styles.productPrice}>
              {product.price}
              <span className={styles.originalPrice}>{product.original}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Celebrations Calendar Component
const CelebrationsCalendar = () => (
  <section className={styles.calendarSection} aria-labelledby="celebrations-calendar">
    <header className={styles.sectionHeader}>
      <h2 id="celebrations-calendar">Celebrations Calendar</h2>
    </header>
    <div className={styles.calendarGrid}>
      {[
        { name: 'Boss Day', date: '16th October', image: images.bossDay, alt: 'Boss Day celebration' },
        { name: 'Dhanteras', date: '18th October', image: images.dhanteras, alt: 'Dhanteras festival' },
        { name: 'Diwali', date: '20th October', image: images.diwali, alt: 'Diwali festival of lights' },
        { name: 'Bhai Dooj', date: '23rd October', image: images.bhaiDooj, alt: 'Bhai Dooj celebration' },
        { name: 'Halloween', date: '31st October', image: images.halloween, alt: 'Halloween celebration' }
      ].map((event, index) => (
        <article key={index} className={styles.eventCard}>
          <img src={event.image} alt={event.alt} loading="lazy" />
          <div className={styles.eventInfo}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Hampers Section Component with Mobile Carousel
const HampersSection = () => (
  <section className={styles.hampersSection} aria-labelledby="hampers-occasion">
    <header className={styles.sectionHeader}>
      <h2 id="hampers-occasion">Hampers for every occasion</h2>
      <p>Packed with love</p>
    </header>

    {/* Mobile Carousel */}
    <div className={styles.scrollCarousel}>
      {[
        { name: 'Dino-Themed Birthday Cake 1kg', price: '₹1295', delivery: true, image: images.dinoCake, alt: 'Dino themed birthday cake' },
        { name: 'Diwali Gift Hamper With Butter Cookies', price: '₹1195', delivery: true, image: images.diwaliCookies, alt: 'Diwali gift hamper with cookies' },
        { name: 'Floral Gratitude Bouquet', price: '₹595', delivery: true, image: images.floralBouquet, alt: 'Floral gratitude bouquet' },
        { name: 'Sparkling Traditions Diwali Hamper', price: '₹1495', delivery: false, image: images.sparklingTraditions, alt: 'Sparkling traditions Diwali hamper' }
      ].map((hamper, index) => (
        <article key={index} className={styles.mobileHamperCard}>
          <img src={hamper.image} alt={hamper.alt} loading="lazy" />
          <div className={styles.mobileHamperInfo}>
            <h3>{hamper.name}</h3>
            <p className={styles.mobileHamperPrice}>{hamper.price}</p>
            {hamper.delivery && (
              <span className={styles.mobileDeliveryBadge}>Same Day Delivery</span>
            )}
          </div>
        </article>
      ))}
    </div>

    {/* Desktop Grid */}
    <div className={styles.hampersGrid}>
      {[
        { name: 'Dino-Themed Birthday Cake 1kg', price: '₹1295', delivery: true, image: images.dinoCake, alt: 'Dino themed birthday cake' },
        { name: 'Diwali Gift Hamper With Butter Cookies', price: '₹1195', delivery: true, image: images.diwaliCookies, alt: 'Diwali gift hamper with cookies' },
        { name: 'Floral Gratitude Bouquet', price: '₹595', delivery: true, image: images.floralBouquet, alt: 'Floral gratitude bouquet' },
        { name: 'Sparkling Traditions Diwali Hamper', price: '₹1495', delivery: false, image: images.sparklingTraditions, alt: 'Sparkling traditions Diwali hamper' }
      ].map((hamper, index) => (
        <article key={index} className={styles.hamperCard}>
          <img src={hamper.image} alt={hamper.alt} loading="lazy" />
          <div className={styles.hamperInfo}>
            <h3>{hamper.name}</h3>
            <p className={styles.hamperPrice}>{hamper.price}</p>
            {hamper.delivery && (
              <span className={styles.deliveryBadge}>Same Day Delivery</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Gifts by Relationship Component
const GiftsByRelationship = () => (
  <section className={styles.relationshipSection} aria-labelledby="gifts-relationship">
    <header className={styles.sectionHeader}>
      <h2 id="gifts-relationship">Gifts by Relationship</h2>
    </header>
    <div className={styles.relationshipGrid}>
      {[
        { name: 'Men', image: images.men, alt: 'Gifts for men' },
        { name: 'Women', image: images.women, alt: 'Gifts for women' },
        { name: 'Kids', image: images.kids, alt: 'Gifts for kids' },
        { name: 'Friend', image: images.friend, alt: 'Gifts for friends' },
        { name: 'Girlfriend', image: images.girlfriend, alt: 'Gifts for girlfriend' },
        { name: 'Boyfriend', image: images.boyfriend, alt: 'Gifts for boyfriend' },
        { name: 'Wife', image: images.wife, alt: 'Gifts for wife' },
        { name: 'Husband', image: images.husband, alt: 'Gifts for husband' }
      ].map((relation, index) => (
        <article key={index} className={styles.relationCard}>
          <div className={styles.relationImage}>
            <img src={relation.image} alt={relation.alt} loading="lazy" />
          </div>
          <p>{relation.name}</p>
        </article>
      ))}
    </div>
  </section>
);

// Surprises Section Component
const SurprisesSection = () => (
  <section className={styles.surprisesSection} aria-labelledby="surprises-little-ones">
    <header className={styles.sectionHeader}>
      <h2 id="surprises-little-ones">Surprises For Little Ones</h2>
    </header>
    <div className={styles.surprisesGrid}>
      <div className={styles.promoCard}>
        <img src={images.cakeCreations} alt="Cake creations for kids" loading="lazy" />
        <div className={styles.promoOverlay}>EXPLORE CAKE CREATIONS</div>
      </div>
      <div className={styles.promoCard}>
        <img src={images.lovelyGifts} alt="Lovely gifts for children" loading="lazy" />
        <div className={styles.promoOverlay}>FIND LOVELY GIFTS</div>
      </div>
    </div>
  </section>
);

// Home & Living Section Component
const HomeLivingSection = () => (
  <section className={styles.homeLivingSection} aria-labelledby="home-living-gifts">
    <header className={styles.sectionHeader}>
      <h2 id="home-living-gifts">Home & Living Gifts</h2>
    </header>
    <div className={styles.homeLivingGrid}>
      {[
        { name: 'Home Decor', image: images.homeDecor, alt: 'Home decor gifts' },
        { name: 'Photo Frames', image: images.photoFrames, alt: 'Photo frame gifts' },
        { name: 'Kitchen & Dining', image: images.kitchenDining, alt: 'Kitchen and dining gifts' }
      ].map((category, index) => (
        <article key={index} className={styles.homeCard}>
          <img src={category.image} alt={category.alt} loading="lazy" />
          <div className={styles.homeInfo}>
            <h3>{category.name}</h3>
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Gift Finder Section Component
const GiftFinderSection = () => (
  <section className={styles.giftFinderSection} aria-labelledby="gift-finder">
    <header className={styles.sectionHeader}>
      <h2 id="gift-finder">Gift Finder</h2>
      <p>Search Gifts Quicker</p>
    </header>
    <div className={styles.giftFinderGrid}>
      {[
        { name: 'Occasion', image: images.occasion, alt: 'Find gifts by occasion' },
        { name: 'Gift Type', image: images.giftType, alt: 'Find gifts by type' },
        { name: 'Need Inspiration?', image: images.inspiration, alt: 'Get gift inspiration' }
      ].map((item, index) => (
        <article key={index} className={styles.finderCard}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <h3>{item.name}</h3>
        </article>
      ))}
    </div>
  </section>
);

// Customer Stories Component
const CustomerStories = () => (
  <section className={styles.customerStories} aria-labelledby="customer-stories">
    <header className={styles.sectionHeader}>
      <h2 id="customer-stories">Customer Stories</h2>
      <p>Rated 4.85 ★ | Based on 1155 ratings</p>
    </header>

    <div className={styles.reviewsGrid}>
      {[
        { rating: '★★★★★', text: 'It was nice experience', author: 'Seetra, 17 Oct 2023' },
        { rating: '★★★★★', text: 'Excellent service.', author: 'Rajashaka, 17 Oct 2023' },
        { rating: '★★★★★', text: 'It was nice experience', author: 'Jyoti Yogi, 17 Oct 2023' }
      ].map((review, index) => (
        <article key={index} className={styles.reviewCard}>
          <div className={styles.stars}>{review.rating}</div>
          <p className={styles.reviewText}>{review.text}</p>
          <p className={styles.reviewAuthor}>{review.author}</p>
        </article>
      ))}
    </div>

    <div className={styles.trustFeatures}>
      {[
        { title: 'Data Privacy', desc: 'All personal information kept strictly confidential.', image: images.dataPrivacy, alt: 'Data privacy protection' },
        { title: 'Happiness Guaranteed', desc: 'Over 750,000 happy customers across India.', image: images.happiness, alt: 'Happiness guarantee' },
        { title: 'Secure Payments', desc: 'Protected with trusted payment gateways.', image: images.securePayments, alt: 'Secure payment methods' },
        { title: 'Made in India', desc: 'All gifts are made in India by our happiness scientists.', image: images.madeInIndia, alt: 'Made in India products' }
      ].map((feature, index) => (
        <article key={index} className={styles.featureCard}>
          <img src={feature.image} alt={feature.alt} className={styles.featureIcon} loading="lazy" />
          <h4>{feature.title}</h4>
          <p>{feature.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

const HomePage = () => {
  return (
    <>
      <SEO />
      <div className={styles.container}>
        {/* <TrustIndicator /> */}
        
        <main className={styles.main}>
          {/* Circular icons rail */}
          <section className={styles.iconsRail} aria-label="Quick categories">
            {[
              { name: 'Diwali', image: images.Diwali, alt: 'Diwali gifts and hampers' },
              { name: 'Anniversary', image: images.anniversary, alt: 'Anniversary gifts and surprises' },
              { name: 'Birthday', image: images.birthday, alt: 'Birthday gifts and cakes' },
              { name: 'Boyfriend', image: images.boyfriend, alt: 'Gifts for boyfriend' },
              { name: 'Custom hampers', image: images.customHampers, alt: 'Custom gift hampers' },
              { name: 'Girlfriend', image: images.girlfriend, alt: 'Gifts for girlfriend' },
              { name: 'Home decor', image: images.homeDecor, alt: 'Home decor gifts' }
            ].map((item, index) => (
              <div key={index} className={styles.iconCard}>
                <div className={styles.iconCircle}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </section>

          {/* Hero banner */}
          <section className={styles.hero} aria-label="Featured patakha hamper">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1>India's First Patakha Hamper</h1>
                <p>Make their day explode with joy. Thoughtfully curated surprises, personalized just for them.</p>
                <button className={styles.cta}>Shop now</button>
              </div>
              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.giftBox}>
                  <img src={images.ayodhyaDiwali} alt="Patakha Hamper with festive decorations" className={styles.giftImage} loading="lazy" />
                  <div className={styles.giftOverlay}>The Indian Santa</div>
                </div>
              </div>
            </div>
          </section>

            {/* Rating Section */}
           <TrustIndicator />

          {/* Gifts by occasion */}
          <Section 
            title="Gifts by occasion"
            items={[
              { title: 'Anniversary', meta: 'Celebrate lasting love', image: images.anniversaryCelebration, alt: 'Anniversary celebration gifts' },
              { title: 'Birthday', meta: 'Surprises for every age', image: images.birthdayParty, alt: 'Birthday party gifts' },
              { title: 'Honeymoon', meta: 'Romance-packed picks', image: images.honeymoon, alt: 'Honeymoon gift ideas' },
              { title: 'House warming', meta: 'Make new homes glow', image: images.houseWarming, alt: 'House warming gifts' },
              { title: 'Baby shower for dads', meta: 'Cheer the new dad', image: images.babyShower, alt: 'Baby shower gifts for fathers' }
            ]}
            type="grid"
            ariaLabelledBy="gifts-occasion"
          />

          {/* Products Section */}
          <ProductsSection />

          {/* Celebrations Calendar */}
          <CelebrationsCalendar />

          {/* Hampers for every occasion */}
          <HampersSection />

          {/* Gifts by Relationship */}
          <GiftsByRelationship />

          {/* Surprises For Little Ones */}
          <SurprisesSection />

          {/* Home & Living Gifts */}
          <HomeLivingSection />

          {/* Gift Finder */}
          <GiftFinderSection />

          {/* Customer Stories */}
          <CustomerStories />

          <p className={styles.footnote}>Make every occasion special with The Indian Santa</p>
        </main>
      </div>
    </>
  );
};

export default React.memo(HomePage);