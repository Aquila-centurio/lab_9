import React, { Component } from "react";
import "./App.css";
import ToDo from "./components/ToDO";
import img1 from "./img/f3.png";
import img2 from "./img/f4.png";
import img3 from "./img/f5.png";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Что вам необходимо?</h1>
        <div className="blocks">
          <ToDo title="Первый" img={img1} text="Lorem ipsum dolor sit amet consectetur adipiscing elit."></ToDo>
          <ToDo title="Второй" img={img2} text="Lorem ipsum dolor sit amet consectetur adipiscing elit?"></ToDo>
          <ToDo title="Третий" img={img3} text="Lorem ipsum dolor sit amet consectetur adipiscing elit!"></ToDo>
        </div>
      </div>
    );
  }
}

export default App;
