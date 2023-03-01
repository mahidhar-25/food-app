import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  TotalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      TotalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.TotalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      TotalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const AddItemToCart = (item) => {
    return dispatchCartState({ type: "ADD", item: item });
  };
  const RemoveItemFromCart = (id) => {
    return dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartData = {
    items: cartState.items,
    TotalAmount: cartState.TotalAmount,
    addItem: AddItemToCart,
    removeItem: RemoveItemFromCart,
    clearItems: () => {},
  };
  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
