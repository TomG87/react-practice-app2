import React from "react";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Card from "./components/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const newItem = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div className="app">
      <Navbar />
      {newItem}
    </div>
  );
}
