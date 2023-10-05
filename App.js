import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          type: "quantum",
          title: "Gemini Mini",
          img: "./Gemini_Mini.jpeg",
          desk: "Gemini Mini содержит два кубита, но программное обеспечение может имитировать работу сразу восьми кубитов. Устройство весом 14 кг получило небольшой дисплей. Энергопотребление новинки составляет 60 Вт.",
          price: "8900",
        },
        {
          id: 2,
          type: "quantum",
          title: "Gemini",
          img: "./Gemini.jpeg",
          desk: "Модель Gemini обладает двумя кубитами, весит 44 кг и потребляет 100 Вт. Этот компьютер способен выполнять гораздо более сложные операции.",
          price: "43000",
        },
        {
          id: 3,
          type: "mobile",
          title: "Triangulum",
          img: "./Triangulum.jpeg",
          desk: "Самая мощная из представленных — модель Triangulum. Ее энергопотребление составляет 300 Вт. У этого компьютера есть порт для программирования, а его квантовые схемы можно настраивать.",
          price: "58000",
        },
      ],
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(type) {
    if (type === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.type === type)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
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
