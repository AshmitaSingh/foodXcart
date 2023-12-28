import React from "react";
import logo from "../assets/logo.jpg";
import Cart from "./Cart";

function Header() {
  return (
    <div className="flex justify-between items-center m-2 px-2">
      <img className="w-30 h-20 rounded-full" src={logo} alt="logo" />
      <div className="flex gap-32  cursor-pointer">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <Cart />
      </div>
    </div>
  );
}

export default Header;
