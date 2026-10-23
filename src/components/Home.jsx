import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <main>
      <Header />
      <div className="cards-container">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8eBNb-nrL_Kqp76GRhmXWaTtLNNsyZFUfIefq-pZcHXZPcGESAirmb5O&s=10"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://tofuu.getjusto.com/orioneat-local/resized2/QyRsDfua3FTxx55HZ-2400-x.webp"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://cdn.blog.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg"
        />
      </div>
    </main>
  );
};

export default Home;