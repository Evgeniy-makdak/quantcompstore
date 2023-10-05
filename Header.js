import React, { useState } from "react";
import "../index.css";
import { FaShoppingBag } from "react-icons/fa";
import Order from "../Order";

const showOrders = (props) => {
  let amount = 0
  props.orders.forEach(el => amount += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="amount">Total: $ {new Intl.NumberFormat().format(amount)}</p>
    </div>
  );
};

const showNothing = () => {
  return (<div className="empty">
    <h2>Cart empty</h2>
  </div>)
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <div className="imglogo"></div>
        <span className="logo">ACTECK STORE</span>
        <ul className="nav">
          <FaShoppingBag
            onClick={() => setCardOpen((cardOpen = !cardOpen))}
            className={`shop-icon-bnt ${cardOpen && "active"}`}
          />

          {cardOpen && (
            <div className="shop-card">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
          <li>История компании</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
