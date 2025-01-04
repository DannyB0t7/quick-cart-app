import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";

function Modal({ open, onModalClose, cartItems, onRemoveItems, onAddItems }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  const totalPrice = Math.round(cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  ),2)

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 w-10/12 sm:w-1/2 min-h-42 max-w-lg rounded-md "
    >
      <div className="grid gap-5">
        {cartItems.length === 0 && (
          <div className="text-center">
            <div className="grid place-items-center">
              <img
                src="/empty-cart.webp"
                alt="Empty cart"
                className="max-w-32 max-h-32 block"
              />
            </div>
            <p className="mt-5">
              {" "}
              Your cart is empty. Start shopping to add items!
            </p>
          </div>
        )}
        {cartItems.length > 0 && (
          <ul className="flex flex-col gap-5">
            {cartItems.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                key={cartItem.id}
                onRemoveItems={onRemoveItems}
                onAddItems={onAddItems}
              />
            ))}
          </ul>
        )}
        <p className="text-end">
          Total Price: $<span>{totalPrice}</span>
        </p>

        <button
          className="self-end justify-self-end py-1 px-3 border border-1 border-slate-900 rounded-full cursor-pointer text-sm"
          onClick={onModalClose}
        >
          {" "}
          Close
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
