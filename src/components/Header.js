import React from "react";
import "../index.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="imglogo"></div>
        <span className="logo">ACTECK STORE</span>
        <ul className="nav">
          <li>История компании</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
