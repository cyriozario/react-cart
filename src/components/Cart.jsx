import React from "react";
import { useCart } from "../CartContext";

function Cart() {
  const { cart } = useCart();
  const { removeFromCart } = useCart();
  const { calculateTotal } = useCart();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-details">
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <button
                  className="remove-from-cart"
                  onClick={() => removeFromCart(item)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="total">Total : ${calculateTotal()}</p>
    </div>
  );
}

export default Cart;
