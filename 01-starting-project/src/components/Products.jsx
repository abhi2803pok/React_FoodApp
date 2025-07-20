import Product from "./product";
import { useState, useEffect } from "react";

function Products() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch("http://localhost:3000/meals");
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };
        fetchMeals();
    }, []);

    return (
        <section className="center">
            <h2 className="center">Our Products</h2>
            <ul id="meals">
                {meals.map((meal) => (
                    <Product meal={meal} key={meal.id} />
                ))}
            </ul>
        </section>
    );
}

export default Products;
