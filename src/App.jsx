import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Button from './components/Button';
import './App.css'

const App = () => {
  // TODO: Define initial product data
const products = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
]
  // TODO: Implement state to manage filtering
const [filter, setFilter] = useState("all")
const [productList, setProductList] = useState(products)

  // TODO: Implement logic to filter products based on availability
function handleUpdatedList(matchId){
  const updatedList = productList.filter(product => product.id !== matchId)
  setProductList(updatedList)
}

function handleClick(selectedFilter){
  setFilter(filter === selectedFilter ? "all" : selectedFilter)
}

const displayedProducts = productList.filter(product => {
  if(filter === "inStock") return product.inStock;
  if(filter === "outOfStock") return !product.inStock;
  return true;
})

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* TODO: Add buttons to allow filtering by availability */}
      <div className='buttons-box'>
        <Button
          onClick={() => handleClick("inStock")}
          className = {(filter === "inStock") ? "active-button" : ""}
          text="in stock"
        />

        <Button
          onClick={() => handleClick("outOfStock")}
          className = {(filter === "outOfStock") ? "active-button" : ""}
          text="out of stock"
        />
      </div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={displayedProducts} removeProduct={handleUpdatedList}/>
    </div>
  );
};

export default App;
