import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  const AmountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const AmountValue = AmountInputRef.current.value;
    const AmountNumber = +AmountValue;

    if (
      AmountValue.trim().length === 0 ||
      AmountNumber < 1 ||
      AmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddItem(AmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={AmountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>plz enter amount value (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
