import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD_ITEM":
          let existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );

          if (existingItemIndex !== -1) {
            const updatedItem = {
              ...state.items[existingItemIndex],
              quantity: (state.items[existingItemIndex].quantity || 1) + 1,
            };
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
            return { ...state, items: updatedItems };
          }
          return { ...state, items: [...state.items, action.item] };
        case "REMOVE_ITEM":
           existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
          if (existingItemIndex === -1) return state; // item not found
          if (state.items[existingItemIndex].quantity > 1) {
            const updatedItem = {
              ...state.items[existingItemIndex],
              quantity: state.items[existingItemIndex].quantity - 1,
            };
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
            return { ...state, items: updatedItems };
          }

          return {
            ...state,
            items: state.items.filter((item) => item.id !== action.id),
          };
        default:
          return state;
      }
    },
    { items: [] }
  );
  console.log(cartState);
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItem: (item) => dispatchCartAction({ type: "ADD_ITEM", item }),
        removeItem: (id) => dispatchCartAction({ type: "REMOVE_ITEM", id }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
