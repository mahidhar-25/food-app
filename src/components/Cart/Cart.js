import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCntx = useContext(CartContext);
  const TotalAmount = `$${cartCntx.TotalAmount.toFixed(2)}`;
  const hasItems = cartCntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, amount: 1 });
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
