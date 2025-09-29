import React, { useState } from 'react';
import styles from './Categories.module.css';

const Categories = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('Occasion');

  const products = [
    {
      id: 1,
      name: "Personalized Photo Album",
      price: "$49.99",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA84T3D1uOWHKGyDW3KevnT1tPfWVOh7XwQXfSyszotiJiPPjQGl_v0pP9zUZ10fsX1cIniAfhePF_FFxjhEyYg4338axapRKcnOIkNNxZ1xWMmsYtPp-1GtptAkJYdO0PEPdNvzBI57NRPGP1gsRHVnh_Y5m_QBbgq52LRSlv9Rx26VcgKqhFeDFgFIs0sIR7RewSlKAGrx_M6zQxAGHE-Rw2D-K7CPMwkEVP_T5Dwt5XrFRgtkATeVGI9TDb-EvM3psPWoG3c1Og"
    },
    {
      id: 2,
      name: "Gourmet Chocolate Box",
      price: "$34.50",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpGaWOy_3uZMuz7u5nl7cFDzhTxghhiBd8pYC5mJzhZQbXHN2El-Tnh0Tp5xs-8QEdSPRCyF01I3Y3pG-CssshkGLZcAw6MxU-bdFXYCNmAG7QhFlwGetHk4IcMBnOd1zxo5U_vQ-4wvpjt01ulJWvj6DZxVfoscIJzWHsTjsXNsYgkW23_jZdAl4zy4MXYpn57Y2PWd26NkAIj4SV_V57aoJVQEX4SwSepdCEUVHLaKohkvlUVqdec-eRFZvHXz1S3tXUfDbMeJU"
    },
    {
      id: 3,
      name: "Luxury Spa Gift Set",
      price: "$89.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGgnG3ErzPkFsqR9Gs53PqKl_fr4L8wdbI2RadmmAF0d4GJXOfVj7MeLO7SOpD-bA3nKOjoJ3Rq6qPt--GdKLqKoRNYF4yFEUAoI1JoYle5iAcbznSMWn1s112Q6kdx7vv3fPgGwKLKL5oB-MICOeQefjQyX4O2kVHsac8whKazbwVVNmlESgtTwCyrJ-KxqhgY1V-4Ceq2Vw4o9yRaUkhJTo4GeeGzbd9u8lXYTmI8CBvToWjjGQx2R-X7gBEqC55NfavIK-orr4"
    },
    {
      id: 4,
      name: "Tech Gadget Collection",
      price: "$125.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5tb2KIRjRuQYA5R2JhNGXyP60fMZk4wdIOezbzppo5qmOC1HUSoRwqYSAwhqF07Gm0T-_KYjTN6hYCc3VU9Eolhbc-8gSOgc5xD9UNWpdlB3Xb4LsXcpaZHxxyVN6OFwp3UIZpimOeW7HJXL3X3DQVUBxNmOlgeOP1Ffl6aH6XHPKQxU9FLtuU-RWp--kB5MpRWntmDo1wFxpV05BX7_4H0fGcT-l_BID-rjff7Qg6q-zr5WXgOBat3tXoI199u8dK4HLX-6orw"
    },
    {
      id: 5,
      name: "Handcrafted Jewelry",
      price: "$75.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8z63t_5p1C_cXLq5XjF9y2Sl2DFyseXCOw28wJ-7zbByptQDfouskTkw7V5o71XZOcEpC6D7gfNVXQODVZQsOaIP8JnbgWeeO7qbJyRvVleHHXNiqpOQAIeVSW_Kvby6Tja4gB7Jt8DQZ0pSfslzCDe_OvL0adwcXzW5m2lhbRZv0JqmAq6OO9K69S8VdV0mbVpwplZpZcnNVR1E-Ru_RHu1sE9p1znjruREfxs9MOJNQB_-CAmFtOuMhHNawXR1K3TVCcYnbISo"
    },
    {
      id: 6,
      name: "Outdoor Adventure Kit",
      price: "$99.99",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Uyvs4qy8CpQ76eM5E6ZP8JdH4EOGvJD3qDn8CaDZNJ8sONA20g3szAA6Uvnr3xThwh8vFWKeOcuPc3sX-rhpJb7dmp1ZSuaVUfio2UeMD5nhMAZZ_YI38bo2-YEJqvSzemFfZrXGCLEfyutGk6YfcQ7MFS6Q4OoC0C-OhdPqKQPGxiywtPoq7rq-meBGtW1sBSdUo0UjzMd-sIP1W7WrDUw_HYIGsKFkmSnvn7z8QLozR44ySRqCikDa3UtkCYOqiJo3ckZErxE"
    },
    {
      id: 7,
      name: "Cozy Home Essentials",
      price: "$65.50",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhubYAF5Y66iTFkYjI7fr45FT6MjFj8cAXPXHn8Syg29RDSl8sg8ZiKBpH9KBV_tjPDGJ4SndMko7Xwa2dA1kAjqzIDQ7jm9TQSomUEbkLZuKl_v4dQHS3BRALf1GXghUaqVEMzAzDWwboW3two04bd6ZouYe3RIsU-jIaSm7QYopN2rDwVnm_ooZMgV5NGEViDwvZ3Le_L6xPTj664nhWtG51UNIfrD9HqUNY5ARuUKOfm-tD01PlsTyBfAyeNGJ381kIA9tNYsI"
    },
    {
      id: 8,
      name: "Artisan Coffee Selection",
      price: "$42.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuZj2NTvBTNKzZBO4S2ebT7fJhFYuNOBz604uQv4vmhiygZv1sfhkP9Av9gdrCEVZeXSEm_8rNZI6Iy-EXG3Q1KcWWwiiYSSJM3wZ_zPUG41543Ub8LcSiFWKV0UTRjXcVkNEOyy_h0hpI6TjRazOgjrw--MRFiJnsqx7-Zv5DyLQthNgeWPRucxwzpPphcanDmFf-xCZUb_XTheXcT5PQ6jtHCSd0hi4U5gCSpfgeHXgOvnS6kgIZEj04KeUPvCgg-xkqSI01Es8"
    }
  ];

  const filterButtons = [
    { id: 'price', label: 'Price' },
    { id: 'occasion', label: 'Occasion' },
    { id: 'popularity', label: 'Popularity' }
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className={styles.categories}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Find the Perfect Gift</h1>
          <p className={styles.subtitle}>Explore our curated collection for every occasion.</p>
          
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>
                <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input 
                className={styles.searchInput}
                placeholder="Search for gifts..."
                type="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className={styles.filterButtons}>
            {filterButtons.map((button) => (
              <button
                key={button.id}
                className={`${styles.filterButton} ${
                  activeFilter === button.id ? styles.filterButtonActive : ''
                }`}
                onClick={() => handleFilterClick(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <div 
                  className={styles.productImage}
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;