import React from "react";
import classes from "./ProductItem.module.css";
import MealItemForm from "./ProductItemForm";
import { useDispatch } from "react-redux";
import { pageActions } from "../../../Store-Redux/PageReducer";

const MealItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    let item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    console.log(item)
    dispatch(pageActions.addItemToCartHandler(item));
 
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
