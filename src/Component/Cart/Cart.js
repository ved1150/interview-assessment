import React  from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../Store-Redux/PageReducer";
const Cart = (props) => {
    const info = useSelector(state => state.page)
    console.log(info)
    const dispatch = useDispatch()


    let discontedAmount;
    
  let totalAmount = `$${info.totalAmount.toFixed(2)}`;
   console.log(totalAmount)
  if (info.totalAmount.toFixed(2) > 100) {
    discontedAmount =" (5% discount)"
    totalAmount = `$${(info.totalAmount.toFixed(2) * 95) /100}`
  }
  if (info.totalAmount.toFixed(2) > 250) {
    discontedAmount =" (10% discount)"
    totalAmount = `$${(info.totalAmount.toFixed(2) * 90) /100}`
  }
  if (info.totalAmount.toFixed(2) > 500) {
    discontedAmount =" (20% discount)"
    totalAmount = `$${(info.totalAmount.toFixed(2) * 80) /100}`
  }
  const hasItems = info.items.length > 0;

  const cartItemRemoveHandler = (id) => {
   
   dispatch(pageActions.removeItemFromCartHandler(id));

  };
  const cartItemAddHandler = (item) => {

let a ={ ...item, amount: 1 }

    dispatch(pageActions.addItemToCartHandler(a));
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {info.items.map((item) => (
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
 function order(){
   alert("thanks ")
   dispatch(pageActions.order())
  
 }
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount {discontedAmount}</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={order}>Order</button>
        }
      </div>
    </Modal>
  );
};

export default Cart;