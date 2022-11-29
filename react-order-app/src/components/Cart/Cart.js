import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `￦${cartCtx.totalAmount} `;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmit(true);

    await fetch(
      "https://react-http-ca2bd-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmit(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        닫기
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          주문
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onRemove={cartItemRemoveHandler.bind(null, items.id)}
          onAdd={cartItemAddHandler.bind(null, items)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>총합</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancle={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const submitCartModalContent = (
    <p className={classes.ordertext}>주문 접수 중...</p>
  );
  const didSubmitCartModalContent = (
    <React.Fragment>
      <p className={classes.ordertext}>주문 완료!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          닫기
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && submitCartModalContent}
      {!isSubmit && didSubmit && didSubmitCartModalContent}
    </Modal>
  );
};
export default Cart;
