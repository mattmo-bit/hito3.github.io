import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="pizza-card">
      <img src={img} alt={`Pizza ${name}`} className="pizza-img" />
      <div className="pizza-card-body">
        <h3 className="pizza-title">Pizza {name}</h3>
        <hr className="card-divider" />
        <p className="ingredients-label">🍕 Ingredientes:</p>
        <p className="ingredients-list">{ingredients.join(', ')}</p>
        <hr className="card-divider" />
        <p className="pizza-price">Precio: ${price.toLocaleString('es-CL')}</p>
        <div className="card-buttons">
          <button className="btn-secondary">Ver Más 👀</button>
          <button className="btn-primary">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;