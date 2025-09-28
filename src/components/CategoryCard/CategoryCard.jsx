import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category }) => {
  const { name, image } = category;

  return (
    <div className={styles.categoryCard}>
      <div 
        className={styles.image}
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;