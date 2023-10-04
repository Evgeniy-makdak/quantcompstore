import React, { useState } from "react";
import "../index.css";
import { FaShoppingBag } from "react-icons/fa";

export default function Header() {

  let [cardOpen, setCardOpen] = useState(false)

  return (
    <header>
      <div className="header">
        <div className="imglogo"></div>
        <span className="logo">ACTECK STORE</span>
        <ul className="nav">
          <FaShoppingBag onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-icon-bnt ${cardOpen && 'active'}`}/>

          {cardOpen && 
            <div className="shop-card">
              
            </div>
          }
          <li>История компании</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
