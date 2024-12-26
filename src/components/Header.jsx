import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header({ onModalOpen, cartItems }) {
  let totalLength;
  if (cartItems.length > 0) {
    totalLength = cartItems.reduce(
      (totalPrice, item) => totalPrice + item.quantity,
      0
    );
  }
  return (
    <header className="bg-slate-900 py-4 px-4 text-white flex justify-between items-center">
      <h2 className="font-bold text-2xl">QuickCart</h2>
      <div onClick={onModalOpen} className="p-2 cursor-pointer relative">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        {totalLength && (
          <span className="absolute -right-1 -top-1 z-10 bg-slate-700 rounded-full w-5 h-5 text-xs grid place-items-center text-white font-semibold">
            {totalLength}
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
