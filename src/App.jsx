import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import farmlyLogo from './assets/farmlyLogo.png'; // Importa la imagen aquí

const EcommerceView = () => {
  const [products, setProducts] = useState([]);


  const getProductData = async () => {
    try {
      const url = 'https://j2rpk7nc81.execute-api.eu-central-1.amazonaws.com/dev/products';
      const response = await fetch(url);
      const data = await response.json();

      // Parsea el string JSON dentro de data.body a un array de objetos
      const parsedBody = JSON.parse(data.body);

      // Verifica si parsedBody es un array antes de establecerlo como estado
      if (Array.isArray(parsedBody)) {
        setProducts(parsedBody); // Establece los productos obtenidos del servidor en el estado
      } else {
        console.error('El cuerpo de la respuesta no es un array válido.');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };


  useEffect(() => {

    getProductData();
  }, [products]);

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
          {products.map((product, index) => (
            <ProductCard
              key={product.ProductID}
              ProductID={product.ProductID}
              imageSrc={product.ImgSrc}
              productName={product.ProductName}
              price={product.Price}
              Quantity={product.Quantity}
              Description={product.Description}
              onBuyClick={getProductData}
              Data={product.Data}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EcommerceView;
