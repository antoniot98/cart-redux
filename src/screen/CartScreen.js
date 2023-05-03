import React from "react";
import {useSelector} from "react-redux";
import CartProduct from "../components/CartProduct";

const CartScreen = () => {
    const {cart} = useSelector((state) => state);

    return (
        <div className="container">
            <h1>Elementi nel carrello : {cart.cartElement}</h1>

            <h3>Costo totale: {cart.total} €</h3>

            <hr></hr>
            <div className="container d-flex flex-wrap justify-content-center">
                {cart.cartList.length > 0 ? (
                    cart.cartList.map((p, index) => <CartProduct key={index} {...p} />)
                ) : (
                    <h2>No item to cart</h2>
                )}
            </div>

        </div>
    );
};

export default CartScreen;
