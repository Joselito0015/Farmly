import React, { useState } from 'react';
import LineChart from './LineChart';

const ProductCard = ({ ProductID,imageSrc, productName, price, Quantity, onBuyClick,Description,Data }) => {
  const [counter, setCounter] = useState(1); // Estado para el contador de compra
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleIncrement = () => {
    if (counter < Quantity) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleBuy = async() => {
    setShowModal(true); // Mostrar el modal al hacer clic en Comprar
    //update api products quantity
    const url = 'https://j2rpk7nc81.execute-api.eu-central-1.amazonaws.com/dev/products'
    //POSSST metodth quantity and productid
    
    console.log(ProductID);
    console.log(counter);
    console.log(JSON.stringify({
      ProductID: ProductID,
      Selled: counter
    }));
    const response = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          ProductID: ProductID,
          Selled: counter
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const data = await response.json();
    console.log(data);
    // Lógica para la compra del producto
    console.log('Product bought!');
    onBuyClick();

  };

  const handleCloseModal = () => {
    setShowModal(false); // Cerrar el modal
  };

  const totalPrice = price * counter; // Cálculo del precio total

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={productName} />
        <p>{Description} </p>

      </div>
      <div className="product-details">
        <h2>{productName}</h2>
        <p>Price: S/.{price}</p>
        <p>Quantity: {Quantity}</p>
        <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <span>{counter}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button id='btnBuy' onClick={handleBuy}>Comprar</button>
      </div>
      <div className="product-chart">
        <LineChart
        Data={Data}
        />
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>¡Gracias por tu compra! 😊</p>
            <p>Te llegará en 3 días</p>
            
            <p>Producto: {productName}</p>
            <p>Cantidad: {counter}</p>
            <p>Precio total: S/.{totalPrice}</p>
            <button className="closeBtn" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
