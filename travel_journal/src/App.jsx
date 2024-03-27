import React from "react";
import Navbar from "./components/Navbar";
import data from "./components/data";
import Card from "./components/Card";
import "./App.css";

export default function App() {
  const newItem = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      {newItem}
    </div>
  );
}
