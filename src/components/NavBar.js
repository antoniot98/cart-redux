import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Routes, Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import CartScreen from "../screen/CartScreen";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary bg-body-tertiary ">
        <div className="container-fluid  ">
          <Link class="navbar-brand" to="/">
            Shop
          </Link>

            <Link to="/cart" className="nav-link">

              <AiOutlineShoppingCart />
            </Link>

        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/cart" element={<CartScreen />}></Route>
      </Routes>
    </>
  );
};

export default NavBar;
