import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
function MealItem(props) {
  const cartCntx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const AddToCartHandler = (amount) => {
    cartCntx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
        <div className={classes.price}>
          <p>{price}</p>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={AddToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
