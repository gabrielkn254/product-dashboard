import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  // TODO: Check if the product list is empty and display a message if needed
if (products.length === 0){
  return (
    <div>
      <p>No products here</p>
    </div>
  )
} else {
  return (
    <div className='product-list'>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} onRemove={removeProduct}/>
      ))}
    </div>
  );
}
};

export default ProductList;
