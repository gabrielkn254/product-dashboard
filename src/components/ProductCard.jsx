import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {

  return (
    <div className={(!product.inStock) ? `outOfStockClass ${styles.outOfStockClass}` : styles.inStockClass}>
    
        {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
        {/* TODO: Display product name */}
        <h3>{product.name}</h3>
        {/* TODO: Display product price */}
        <p>{product.price}</p>
        {/* TODO: Show if the product is in stock or out of stock */}
        <p className= {styles.stock}>{(product.inStock === false) ? "out of stock" : "in stock" }</p>
    
      
      <button style={{
        padding: "8px 16px",
        backgroundColor: "rgba(255, 0, 0, 0.15)",
        color: "red",
        borderRadius: "100px",
        width: "fit-content",
        height: "fit-content",
      
      }} onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
