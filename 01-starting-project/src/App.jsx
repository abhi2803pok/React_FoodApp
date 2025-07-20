import Products from "./components/products";
import Header from "./components/Header";
import { CartContextProvider } from "./store/CartContext";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Products />
      </main>
    </CartContextProvider>
  );
}

export default App;
