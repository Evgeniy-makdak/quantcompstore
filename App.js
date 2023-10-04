import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Gemini Mini",
          img: "./Gemini_Mini.jpeg",
          desk: "Gemini Mini содержит два кубита, но программное обеспечение может имитировать работу сразу восьми кубитов. Устройство весом 14 кг получило небольшой дисплей. Энергопотребление новинки составляет 60 Вт.",
          price: "$8900",
        },
        {
          id: 2,
          title: "Gemini",
          img: "./Gemini.jpeg",
          desk: "Модель Gemini обладает двумя кубитами, весит 44 кг и потребляет 100 Вт. Этот компьютер способен выполнять гораздо более сложные операции.",
          price: "$43000",
        },
        {
          id: 3,
          title: "Triangulum",
          img: "./Triangulum.jpeg",
          desk: "Самая мощная из представленных — модель Triangulum. Ее энергопотребление составляет 300 Вт. У этого компьютера есть порт для программирования, а его квантовые схемы можно настраивать.",
          price: "$58000",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isAnArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isAnArray = true;
    });
    if (!isAnArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
