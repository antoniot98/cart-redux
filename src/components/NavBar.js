import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Routes, Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";
import CartScreen from "../screen/CartScreen";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-dark bg-primary bg-body-tertiary ">
        <div class="container-fluid  ">
          <Link class="navbar-brand" to="/">
            Shop
          </Link>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Link to="/cart" className="nav-link">
              <AiOutlineShoppingCart />
            </Link>
          </button>
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
