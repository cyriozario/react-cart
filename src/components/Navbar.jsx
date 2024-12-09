import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCart } from "../CartContext";

function Navbar() {
  const { count } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-cart">
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart">
            <span>{count}</span>
          </i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
