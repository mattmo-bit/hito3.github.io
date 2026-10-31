import React from 'react';
import Navbar from './components/Navbar';
// import Home from './components/Home'; // Comentado para probar el carrito
import Cart from './components/Cart';    // 👈 Descomentado para ver el carrito
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      {/* <Home /> */}
      <Cart /> {/* 👈 Se renderiza el carrito interactivo */}
      <Footer />
    </div>
  );
}

export default App;