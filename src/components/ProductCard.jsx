import React from 'react';
import LineChart from './LineChart';


const ProductCard = ({ imageSrc, productName, price, onBuyClick }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={productName} />
      </div>
      <div className="product-details">
        <h2>{productName}</h2>
        <p>Price: S/.{price}</p>
        <button onClick={onBuyClick}>Comprar</button>
      </div>
      <div className="product-chart">
        <LineChart />
      </div>  
    </div>
  );
};

export default ProductCard;
