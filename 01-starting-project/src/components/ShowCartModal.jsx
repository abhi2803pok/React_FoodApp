import React, { useContext } from "react";
import ReactDOM from "react-dom";

import CartContext from "../store/CartContext";

export function ShowCartModal({ onClose }) {
  const cartContext = useContext(CartContext);

    const modalContent = (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 style={{ color: "red" }}>Your Cart</h2>

        {cartContext.items.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <ul className="cart">
            {cartContext.items.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <p className="cart-item-name"><strong>Name:</strong> {item.name}</p>
                  <p className="cart-item-price"><strong>Price:</strong> ${item.price}</p>
                  <p className="cart-item-quantity"><strong>Quantity:</strong> {item.quantity || 1}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => cartContext.removeItem(item.id)}>-</button>
                  <button onClick={() => cartContext.addItem({ ...item, quantity: 1 })}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="modal-actions">
          <button className="button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
    
  );
  return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
}
