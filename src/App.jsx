import React from 'react';
import ProductCard from './components/ProductCard';
import farmlyLogo from './assets/farmlyLogo.png'; // Importa la imagen aquí

const EcommerceView = () => {
  const handleBuyClick = () => {
    // Lógica para la compra del producto
    console.log('Product bought!');
  };

  return (
    <>
      <h1>¡Bienvenido a Farmly!</h1>
      <p>¡Compra productos frescos y de gran calidad!</p> 
      <img id='Logo' src={farmlyLogo} alt="imagen de fondo" /> {/* Usa la imagen importada aquí */}


      <div className="ecommerce-view">

        <div className="product-container">
          <ProductCard
            imageSrc="https://sembralia.com/cdn/shop/articles/tomate.jpg?v=1648560931"
            productName="Tomatillo"
            price={19.99}
            onBuyClick={handleBuyClick}
          />
        </div>
      </div>
    </>
  );
};

export default EcommerceView;
