import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import { ShowCartModal } from "./ShowCartModal";

function Header() {
  const cartContext = useContext(CartContext);
  const [showModal, setShowModal] = useState(false); // state to control modal
  

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Food Logo"
          />
          <h1>React FoodApp</h1>
        </div>
        <button
          className="button"
          style={{ position: "relative" }}
          onClick={() => setShowModal(true)}
        >
          Cart
          {cartContext.items.length > 0 && (
            <span
              className="badge"
              style={{
                background: "#fff",
                color: "#ff6600",
                borderRadius: "50%",
                padding: "0.3em 0.7em",
                fontWeight: "bold",
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "0.95rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              }}
            >
              {cartContext.items.length}
            </span>
          )}
        </button>
      </header>

      {showModal && (
        <ShowCartModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Header;
