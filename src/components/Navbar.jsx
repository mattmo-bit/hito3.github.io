import React from 'react';

const Navbar = ({ total = 25000, token = false }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Pizzería Mamma Mia!</span>
        <div className="navbar-links">
          <button className="nav-btn">🍕 Home</button>
          {token ? (
            <>
              <button className="nav-btn">🔓 Profile</button>
              <button className="nav-btn">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="nav-btn">🔐 Login</button>
              <button className="nav-btn">🔐 Register</button>
            </>
          )}
        </div>
      </div>
      <div className="navbar-right">
        <button className="nav-btn btn-total">
          🛒 Total: ${total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;