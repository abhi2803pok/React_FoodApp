import { useContext } from "react";
import CartContext from "../store/CartContext";

function Product({ meal }) {
    const cartContext = useContext(CartContext);

    const addItem = () => {
        cartContext.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price,
            image: meal.image
        });
    };

    return (
        <li className="meal-item">
            <article className="meal">
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} className="meal-image" />
                <div>
                    <h3 className="meal-item-title">{meal.name}</h3>
                    <p className="meal-item-description">{meal.description}</p>
                    <span className="meal-item-price">${meal.price}</span>
                </div>
                <p className="meal-item-actions">
                    <button className="btn" onClick={addItem}>Add to Cart</button>
                </p>
            </article>
        </li>
    );
}

export default Product;