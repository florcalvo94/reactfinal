import React from "react";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
    return ( 
    <header>
        <img src="img/cart.png"/>
        <nav>
        <p className="item-nav">Home</p>
        <p className="item-nav">Products</p>
        <p className="item-nav">About Us</p>
        <p className="item-nav">Login</p>
        </nav> 
        <CartWidget/>
    </header>
    )
  }

  export default Navbar;
