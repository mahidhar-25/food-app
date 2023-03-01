import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import MealsImg from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.headerleft}>
          <h1>IIITDMMeals</h1>
        </div>
        <div className={classes.headerright}>
          <HeaderCartButton onClick={props.OnShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table with full of food!" />
      </div>
    </Fragment>
  );
}

export default Header
