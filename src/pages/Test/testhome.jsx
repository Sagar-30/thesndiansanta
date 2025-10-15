import React from 'react';
import styles from './Home.module.css';

// Import images (you'll need to add these to your project)
// For now using placeholder image URLs - replace with your actual images
// const images = {
//   // Icons
//   iwai: 'https://images.oyehappy.com/icons/iwai.jpg',
//   anniversary: 'https://images.oyehappy.com/icons/anniversary.jpg',
//   birthday: 'https://images.oyehappy.com/icons/birthday.jpg',
//   boyfriend: 'https://images.oyehappy.com/icons/boyfriend.jpg',
//   customHampers: 'https://images.oyehappy.com/icons/custom-hampers.jpg',
//   girlfriend: 'https://images.oyehappy.com/icons/girlfriend.jpg',
//   homeDecor: 'https://images.oyehappy.com/icons/home-decor.jpg',
  
//   // Occasions
//   anniversaryCelebration: 'https://images.oyehappy.com/occasions/anniversary.jpg',
//   birthdayParty: 'https://images.oyehappy.com/occasions/birthday.jpg',
//   honeymoon: 'https://images.oyehappy.com/occasions/honeymoon.jpg',
//   houseWarming: 'https://images.oyehappy.com/occasions/house-warming.jpg',
//   babyShower: 'https://images.oyehappy.com/occasions/baby-shower.jpg',
  
//   // Products
//   ayodhyaDiwali: 'https://images.oyehappy.com/products/ayodhya-diwali.jpg',
//   shubhDeepawali: 'https://images.oyehappy.com/products/shubh-deepawali.jpg',
//   diyPatakha: 'https://images.oyehappy.com/products/diy-patakha.jpg',
//   flavoursDiwali: 'https://images.oyehappy.com/products/flavours-diwali.jpg',
  
//   // Events
//   bossDay: 'https://images.oyehappy.com/events/boss-day.jpg',
//   dhanteras: 'https://images.oyehappy.com/events/dhanteras.jpg',
//   diwali: 'https://images.oyehappy.com/events/diwali.jpg',
//   bhaiDooj: 'https://images.oyehappy.com/events/bhai-dooj.jpg',
//   halloween: 'https://images.oyehappy.com/events/halloween.jpg',
  
//   // Hampers
//   dinoCake: 'https://images.oyehappy.com/hampers/dino-cake.jpg',
//   diwaliCookies: 'https://images.oyehappy.com/hampers/diwali-cookies.jpg',
//   floralBouquet: 'https://images.oyehappy.com/hampers/floral-bouquet.jpg',
//   sparklingTraditions: 'https://images.oyehappy.com/hampers/sparkling-traditions.jpg',
  
//   // Relationships
//   men: 'https://images.oyehappy.com/relationships/men.jpg',
//   women: 'https://images.oyehappy.com/relationships/women.jpg',
//   kids: 'https://images.oyehappy.com/relationships/kids.jpg',
//   friend: 'https://images.oyehappy.com/relationships/friend.jpg',
//   girlfriend: 'https://images.oyehappy.com/relationships/girlfriend.jpg',
//   boyfriend: 'https://images.oyehappy.com/relationships/boyfriend.jpg',
//   wife: 'https://images.oyehappy.com/relationships/wife.jpg',
//   husband: 'https://images.oyehappy.com/relationships/husband.jpg',
  
//   // Promos
//   cakeCreations: 'https://images.oyehappy.com/promos/cake-creations.jpg',
//   lovelyGifts: 'https://images.oyehappy.com/promos/lovely-gifts.jpg',
  
//   // Home & Living
//   homeDecor: 'https://images.oyehappy.com/home/home-decor.jpg',
//   photoFrames: 'https://images.oyehappy.com/home/photo-frames.jpg',
//   kitchenDining: 'https://images.oyehappy.com/home/kitchen-dining.jpg',
  
//   // Gift Finder
//   occasion: 'https://images.oyehappy.com/gift-finder/occasion.jpg',
//   giftType: 'https://images.oyehappy.com/gift-finder/gift-type.jpg',
//   inspiration: 'https://images.oyehappy.com/gift-finder/inspiration.jpg',
  
//   // Features
//   dataPrivacy: 'https://images.oyehappy.com/features/data-privacy.jpg',
//   happiness: 'https://images.oyehappy.com/features/happiness.jpg',
//   securePayments: 'https://images.oyehappy.com/features/secure-payments.jpg',
//   madeInIndia: 'https://images.oyehappy.com/features/made-in-india.jpg'
// };

const images = {
  // Icons
  iwai: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=200&h=200&fit=crop',
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

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Top navigation */}
      <header className={styles.topbar}>
        <div className={styles.nav}>
          <div className={styles.brand}>
            <div className={styles.logo}>OH</div>
            Oye Happy
          </div>
          <nav className={styles.navLinks}>
            <a href="#">Anniversary gifts</a>
            <a href="#">Birthday gifts</a>
            <a href="#">Gifts by occasion</a>
            <a href="#">Gifts by relationship</a>
            <a href="#">Gifts by type</a>
          </nav>
          <div className={styles.navActions}>
            <a className={styles.chip} href="#">Track order</a>
            <a className={styles.cart} href="#">Cart</a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Circular icons rail */}
        <section className={styles.iconsRail} aria-label="Quick categories">
          {[
            { name: 'Iwai', image: images.iwai, alt: 'Iwai' },
            { name: 'Anniversary', image: images.anniversary, alt: 'Anniversary' },
            { name: 'Birthday', image: images.birthday, alt: 'Birthday' },
            { name: 'Boyfriend', image: images.boyfriend, alt: 'Boyfriend' },
            { name: 'Custom hampers', image: images.customHampers, alt: 'Custom hampers' },
            { name: 'Girlfriend', image: images.girlfriend, alt: 'Girlfriend' },
            { name: 'Home decor', image: images.homeDecor, alt: 'Home decor' }
          ].map((item, index) => (
            <div key={index} className={styles.iconCard}>
              <div className={styles.iconCircle}>
                <img src={item.image} alt={item.alt} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </section>

        {/* Hero banner */}
        <section className={styles.hero} aria-label="Featured hamper">
          <div className={styles.heroText}>
            <h1>India's First Patakha Hamper</h1>
            <p>Make their day explode with joy. Thoughtfully curated surprises, personalized just for them.</p>
            <button className={styles.cta}>Shop now</button>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.giftBox}>
              <img src={images.ayodhyaDiwali} alt="Patakha Hamper" className={styles.giftImage} />
              <div className={styles.giftOverlay}>Oye Happy</div>
            </div>
            <div className={styles.sparkler}></div>
          </div>
        </section>

        {/* Gifts by occasion */}
        <Section 
          title="Gifts by occasion"
          items={[
            { title: 'Anniversary', meta: 'Celebrate lasting love', image: images.anniversaryCelebration, alt: 'Anniversary celebration' },
            { title: 'Birthday', meta: 'Surprises for every age', image: images.birthdayParty, alt: 'Birthday party' },
            { title: 'Honeymoon', meta: 'Romance-packed picks', image: images.honeymoon, alt: 'Honeymoon getaway' },
            { title: 'House warming', meta: 'Make new homes glow', image: images.houseWarming, alt: 'House warming' },
            { title: 'Baby shower for dads', meta: 'Cheer the new dad', image: images.babyShower, alt: 'Baby shower for dads' }
          ]}
          type="grid"
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

        <p className={styles.footnote}>Make every occasion special with Oye Happy</p>
      </main>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, items, type = 'grid' }) => (
  <section className={styles.section}>
    <div className={styles.sectionHead}>
      <h2>{title}</h2>
    </div>
    <div className={type === 'grid' ? styles.grid : styles.flexRow}>
      {items.map((item, index) => (
        <article key={index} className={styles.card}>
          <img src={item.image} alt={item.alt} />
          <div className={styles.info}>
            <p className={styles.title}>{item.title}</p>
            {item.meta && <p className={styles.meta}>{item.meta}</p>}
          </div>
        </article>
      ))}
    </div>
  </section>
);

// Products Section Component
const ProductsSection = () => (
  <section className={styles.productsSection}>
    <div className={styles.trustIndicator}>
      ⭐ Rated 4.8 / 5 | Trusted by 4,62,543 Happy Customers
    </div>

    <div className={styles.tabs}>
      <button className={styles.activeTab}>NEW</button>
      <button className={styles.tab}>TRENDING</button>
      <button className={styles.tab}>BESTSELLER</button>
    </div>

    <div className={styles.productsGrid}>
      {[
        { name: 'Ayodhya ki Diwali Hamper', price: '₹1,290', original: '₹1,790', image: images.ayodhyaDiwali },
        { name: 'Shubh Deepawali Hamper', price: '₹1,490', original: '₹1,790', image: images.shubhDeepawali },
        { name: 'DIY Patakha Box', price: '₹399', original: '₹499', image: images.diyPatakha },
        { name: 'Flavours of Diwali Hamper', price: '₹1,690', original: '₹1,790', image: images.flavoursDiwali }
      ].map((product, index) => (
        <div key={index} className={styles.productCard}>
          <img src={product.image} alt={product.name} />
          <div className={styles.productInfo}>
            <h3>{product.name}</h3>
            <p className={styles.productPrice}>
              {product.price}
              <span className={styles.originalPrice}>{product.original}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Celebrations Calendar Component
const CelebrationsCalendar = () => (
  <section className={styles.calendarSection}>
    <div className={styles.sectionHeader}>
      <h2>Celebrations Calendar</h2>
    </div>
    <div className={styles.calendarGrid}>
      {[
        { name: 'Boss Day', date: '16th October', image: images.bossDay },
        { name: 'Dhanteras', date: '18th October', image: images.dhanteras },
        { name: 'Diwali', date: '20th October', image: images.diwali },
        { name: 'Bhai Dooj', date: '23rd October', image: images.bhaiDooj },
        { name: 'Halloween', date: '31st October', image: images.halloween }
      ].map((event, index) => (
        <div key={index} className={styles.eventCard}>
          <img src={event.image} alt={event.name} />
          <div className={styles.eventInfo}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Hampers Section Component
const HampersSection = () => (
  <section className={styles.hampersSection}>
    <div className={styles.sectionHeader}>
      <h2>Hampers for every occasion</h2>
      <p>Packed with love</p>
    </div>
    <div className={styles.hampersGrid}>
      {[
        { name: 'Dino-Themed Birthday Cake 1kg', price: '₹1295', delivery: true, image: images.dinoCake },
        { name: 'Diwali Gift Hamper With Butter Cookies', price: '₹1195', delivery: true, image: images.diwaliCookies },
        { name: 'Floral Gratitude Bouquet', price: '₹595', delivery: true, image: images.floralBouquet },
        { name: 'Sparkling Traditions Diwali Hamper', price: '₹1495', delivery: false, image: images.sparklingTraditions }
      ].map((hamper, index) => (
        <div key={index} className={styles.hamperCard}>
          <img src={hamper.image} alt={hamper.name} />
          <div className={styles.hamperInfo}>
            <h3>{hamper.name}</h3>
            <p className={styles.hamperPrice}>{hamper.price}</p>
            {hamper.delivery && (
              <span className={styles.deliveryBadge}>Same Day Delivery</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Gifts by Relationship Component (Updated with smaller cards)
const GiftsByRelationship = () => (
  <section className={styles.relationshipSection}>
    <div className={styles.sectionHeader}>
      <h2>Gifts by Relationship</h2>
    </div>
    <div className={styles.relationshipGrid}>
      {[
        { name: 'Men', image: images.men },
        { name: 'Women', image: images.women },
        { name: 'Kids', image: images.kids },
        { name: 'Friend', image: images.friend },
        { name: 'Girlfriend', image: images.girlfriend },
        { name: 'Boyfriend', image: images.boyfriend },
        { name: 'Wife', image: images.wife },
        { name: 'Husband', image: images.husband }
      ].map((relation, index) => (
        <div key={index} className={styles.relationCard}>
          <div className={styles.relationImage}>
            <img src={relation.image} alt={relation.name} />
          </div>
          <p>{relation.name}</p>
        </div>
      ))}
    </div>
  </section>
);

// Surprises Section Component
const SurprisesSection = () => (
  <section className={styles.surprisesSection}>
    <div className={styles.sectionHeader}>
      <h2>Surprises For Little Ones</h2>
    </div>
    <div className={styles.surprisesGrid}>
      <div className={styles.promoCard}>
        <img src={images.cakeCreations} alt="Cake Creations" />
        <div className={styles.promoOverlay}>EXPLORE CAKE CREATIONS</div>
      </div>
      <div className={styles.promoCard}>
        <img src={images.lovelyGifts} alt="Lovely Gifts" />
        <div className={styles.promoOverlay}>FIND LOVELY GIFTS</div>
      </div>
    </div>
  </section>
);

// Home & Living Section Component
const HomeLivingSection = () => (
  <section className={styles.homeLivingSection}>
    <div className={styles.sectionHeader}>
      <h2>Home & Living Gifts</h2>
    </div>
    <div className={styles.homeLivingGrid}>
      {[
        { name: 'Home Decor', image: images.homeDecor },
        { name: 'Photo Frames', image: images.photoFrames },
        { name: 'Kitchen & Dining', image: images.kitchenDining }
      ].map((category, index) => (
        <div key={index} className={styles.homeCard}>
          <img src={category.image} alt={category.name} />
          <div className={styles.homeInfo}>
            <h3>{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Gift Finder Section Component
const GiftFinderSection = () => (
  <section className={styles.giftFinderSection}>
    <div className={styles.sectionHeader}>
      <h2>Gift Finder</h2>
      <p>Search Gifts Quicker</p>
    </div>
    <div className={styles.giftFinderGrid}>
      {[
        { name: 'Occasion', image: images.occasion },
        { name: 'Gift Type', image: images.giftType },
        { name: 'Need Inspiration?', image: images.inspiration }
      ].map((item, index) => (
        <div key={index} className={styles.finderCard}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

// Customer Stories Component
const CustomerStories = () => (
  <section className={styles.customerStories}>
    <div className={styles.sectionHeader}>
      <h2>Customer Stories</h2>
      <p>Rated 4.85 ★ | Based on 1155 ratings</p>
    </div>

    <div className={styles.reviewsGrid}>
      {[
        { rating: '★★★★★', text: 'It was nice experience', author: 'Seetra, 17 Oct 2023' },
        { rating: '★★★★★', text: 'Excellent service.', author: 'Rajashaka, 17 Oct 2023' },
        { rating: '★★★★★', text: 'It was nice experience', author: 'Jyoti Yogi, 17 Oct 2023' }
      ].map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.stars}>{review.rating}</div>
          <p className={styles.reviewText}>{review.text}</p>
          <p className={styles.reviewAuthor}>{review.author}</p>
        </div>
      ))}
    </div>

    <div className={styles.trustFeatures}>
      {[
        { title: 'Data Privacy', desc: 'All personal information kept strictly confidential.', image: images.dataPrivacy },
        { title: 'Happiness Guaranteed', desc: 'Over 750,000 happy customers across India.', image: images.happiness },
        { title: 'Secure Payments', desc: 'Protected with trusted payment gateways.', image: images.securePayments },
        { title: 'Made in India', desc: 'All gifts are made in India by our happiness scientists.', image: images.madeInIndia }
      ].map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <img src={feature.image} alt={feature.title} className={styles.featureIcon} />
          <h4>{feature.title}</h4>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HomePage;