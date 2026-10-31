import React, { useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas'; // 👈 Importación correcta con llaves

const Home = () => {
  const [pizzaList] = useState(pizzas);

  return (
    <main>
      <Header />
      <div className="cards-container">
        {pizzaList.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;