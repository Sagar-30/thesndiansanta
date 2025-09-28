import React from 'react';
import styles from './Home.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const featuredCategories = [
    {
      name: "Birthday",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6_bfyypnYeohLk4U15A8pcEPWMIEP3CWdRVgXg0htcHr6CMJ-WmzMtg5Qkx9Zi2EftnKd_VgmGXnQk-veRue4VxYjh3x6dz9FXP1G9HQ3XA1zJr1iRpRaVn_8Mkw3EThOsNEJD639mjLgeB93WQyRgWghWvjFlA-onn3WVMQklc29c3aO_v7zliYlTpX4ba4Jpilx7BQGumTtBD-XHjz3yFqlQPwCiTiKI9L7oszR2EFU2dKPOl6ddS9qI-89BpNqbuBUR_nRvlQ"
    },
    {
      name: "Anniversary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSSfTbsCkpmnUZvkmbUx-9PgF7ArayJ8YSLZXhOt8I2V9mAke-CE_EJMalCGBVxbt5IPbHxsr9hQ3rPgWLbZ7hJhzqaA9JUnK3NvkLwFamyff3VvbGcJxcAMhZq25HfQQIjzPvLDAkfABL1udl9b7dZJf4fpM1xNNZWAbWbc1VWl6KobgtjLsnRspKyCX1aaFfmmXT2p5vK2B6qmx0eK42lbtgts5frC0KSv3qG9Twfb5d9mnc7hemEl-rT1sRhuWB42ANImKeXAI"
    },
    {
      name: "Corporate",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIZFeWSveFBceRL8N_vy8D1gJrCDSd76uxbS98LRPpry2IenUHBjhFO6cBUPuNRxqdtpg_T2oz392lRGMot0Kdr3iXH8Lgtkecg555Bb0mZCURP0Ge_s8C-C8Jgayv2RJLpMvuu2lFfxFlwnsdPi2Cd0q6VwzldZ-M-Blub_HiqbhCoDz88rela6ucQ6yC1aT7NoTWCeJnXlkugc-SwNWs-BI_S2ufL3-hOjxFNlolh2DmfIYs_qAp3OJ0y7ceKQ_CYr4fbPXvRc"
    },
    {
      name: "Custom",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXE0e949ydtuJeX8x9V8iTWitS6Q5Z0-gcVUVmSOomeguQBW_p81J-pm34hdvvXmJhD4eSuh36f69yllrQBBSmGyIQJ-nploRsA01F3s1wRrsEaYYjWhD9X4DR0t9ClkE4cyYUCdieeapnNXU-usdtmfvkGxPv8Mg6joTrRXCtai4L3_-8Fn5AcnviFQsLX0EaIHMP5Q-nRapBCad4_Wbmw2n0totjy4YsXzxpRw3rp8vFvB7hCPtqQTwmziTqt99DP4W84SDXYnE"
    }
  ];

  const trendingGifts = [
    {
      name: "Personalized Photo Album",
      description: "Capture memories with a custom photo album",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE62D0kU2P5LTCOmGy2UCwcpk423S-a7dbMIy4inRg76kjpHiuNkK3ut4DyWzdF3Xn8CmB0EvM35HIMNAiJHp6o7F4LI_kEaJPxARCjUJEYIZHBxBKdVcEoVT09kul1yHwwQQWPZ1BtuOdm6KFBUgjjiMGz-cxTtx66Kso_4brzM-NKNfooX8MuHEewDsvcKNXwefgredEr61q8LmBhuLa2UumOySy4M5_6A6VJGhHPxd2lIH82W5Lbyhup91grq93Ab53k7f-Yd0"
    },
    {
      name: "Gourmet Chocolate Box",
      description: "Indulge in a selection of fine chocolates",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmldQwk9sDxH35sQGJHFVBANHncAkXkpzLHKFNPQ6xNZq-oCk4Vp27YpUVublg6DX8Vqt2lB6awCvNg6JLz0PtscoDUwHEOHetV4VRGE9pSR_wLyboFErHqJ7HawNvgxtz91IIvAP-fpSSmDGBDIqcyo4zMNo0bo2j7RycXqB3RNgF2lmw3-RwoCxPCfQ3NgvFZIvCyqtfak0gUGF4XxxTHfXxcnHU5_0IcfutRB6y7xleillpSWiSROkv4tasHD7oYjKNIn6IoHg"
    },
    {
      name: "Luxury Spa Set",
      description: "Relax and rejuvenate with a spa day",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgh0UqfPE2vgomvNeTwJ4k43N-m0Zaq_HHZThNG0qvvrsb4aH-Xc9X51Y3TT0uqen_NVYRmpmPYDBzY5tMjCrROegRgoB6mte5JixKk_NcD9ssTfhlijD6zKHtm-BWmzxFQI4GH5XOxdo4r-o6C_ZkzbW53W51tMLMPAYtz44B73DNbQmyMLM4F_s2DiMahshwGW9UYKXNf2SiKflYcKqqVBhmBkoa9zKxoW46CtEIN98C0wbRG9ucOk9jXoa5_4h0wRRGWlBaKlg"
    },
    {
      name: "Tech Gadget Collection",
      description: "Explore the latest tech innovations",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT_qDubEDJrarqMG6Tzb1TF5kVR-vzI9ailIsJ9V6kPaSGMkFSuCccuYYl188uRcGYVxcVRoVclw396HQZ3XkY9ghYF9w2i5MijMEn6aa4mBkkk82P_721svKEjxspsqZBrmBKV6qDn84Odrq4tc5O66OEEggP0d0TTduRljvfdWe23SlSR7HHe04PkcCn7Vdhh6KyFvrEm-Ix35z4E3Nh9K7jJ8Oq36edk1EOmJlu4Ma-puuegTh7sjBNohO5ZWck6S8KhUvIyHY"
    },
    {
      name: "Handcrafted Jewelry",
      description: "Adorn yourself with unique, handcrafted pieces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBksmrEA5b_jbJ2sNwPBqDTCPdMhv2UH0kmTJg6u3t8IQCuy8Oo_4_nLH_Rpngymmd5g2a9q7Y9T01bpO9ddofZGnITklVY6bv_H43iudAsO820UC4ccrb0tHP77g1zy48PD-fDO4ET_LyARYoK7eKaS4o71XS0S02gRQKJbyUiRRNJXv10iBXCQp4WzrNmfWCfk79Hg10gG0_VppBQtMwz80tp4VmdFsjbnwQ-BPBHLpTj2-nYr4ttbbvcXKaJgvNfcNY8nvXMXYs"
    },
    {
      name: "Adventure Experience Voucher",
      description: "Create unforgettable moments",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-H05TIFSbTe_TSIXWru7XqmvPMWYJFrmBgQpzfQtTA2mMZV04QZ5vweILPSmvCk1siDT4qwYeqVnU-ehY2tQk_xfQ9uSECAZVlVQgc6mou_2ma_1_iDlsF1AFU9YW5G3_uB6OXseOpgK_o4hnBVYzdNnQwWFFDtzakR4iwn94DuNZ7_coGVWJMmwfYoojsDwaIiJfHSF8D09BHqN22uE60UwiuwENXULndi5-UYT7oYxzBkbbDGk-8w6dsfwQPRN3VZ1_oasXfGw"
    }
  ];

  return (
    <div className={styles.home}>
      <div className={styles.layoutContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Find the Perfect Gift</h1>
            <p className={styles.heroSubtitle}>
              Discover unique and thoughtful gifts for every occasion. Make every celebration memorable with our curated collection.
            </p>
            <button className={styles.ctaButton}>
              <span>Shop Now</span>
            </button>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Categories</h2>
          <div className={styles.categoriesContainer}>
            <div className={styles.categoriesScroll}>
              {featuredCategories.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Gifts Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Trending Gifts</h2>
          <div className={styles.productsGrid}>
            {trendingGifts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.finalCta}>
          <h2 className={styles.finalCtaTitle}>Ready to Find the Perfect Gift?</h2>
          <button className={styles.ctaButton}>
            <span>Shop Now</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;