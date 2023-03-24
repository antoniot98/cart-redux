import React from "react";
import { useState } from "react";
import Prodotto from "../components/Prodotto";
import products from "../products";
const HomeScreen = () => {
  const [prodotti, setProdotti] = useState(products);
  return (
    <div className="container">
      <h1>Lista Prodotti</h1>
      <hr></hr>
      <div className="container d-flex flex-wrap align-items-center justify-content-center">
        {prodotti.map((p, index) => (
          <Prodotto key={index} {...p} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
