import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store";
const CartProduct = ({ _id, name, image, price, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="md-card mx-2 my-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt={name} />{" "}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Prezzo: {price} €</p>
        <button
          href="#"
          className="btn btn-primary"
          onClick={() => dispatch(cartAction.remToCart(index))}
        >
          Elimina dal Carrello
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
