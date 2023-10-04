import React, { useState } from "react";
import "../index.css";
import { FaShoppingBag } from "react-icons/fa";
import Order from "../Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (<div className="empty">
    <h2>Корзина пустая</h2>
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
