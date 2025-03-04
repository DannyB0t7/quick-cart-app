import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";
import Button from "./UI/Button";

function Modal({ open, onModalClose, cartItems, onRemoveItems, onAddItems }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  const totalPrice = Math.round(
    cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,
      0
    ),
    2
  );

  return createPortal(
    <dialog ref={dialog} className="p-5 w-10/12 max-w-lg rounded-md">
      <div className="flex flex-col gap-6 h-full">
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
        <div className="flex flex-col gap-2">
          <p className="text-end">
            Total Price: $<span>{totalPrice}</span>
          </p>

          <Button onClick={onModalClose} style="self-end">
            Close
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
