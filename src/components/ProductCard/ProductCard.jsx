import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { name, description, image } = product;

  return (
    <div className={styles.productCard}>
      <div 
        className={styles.image}
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;