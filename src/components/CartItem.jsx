import React from "react";

function CartItem({ cartItem, onRemoveItems, onAddItems }) {
  const increaseHandler = function (cartItem) {
    onAddItems(cartItem);
  };

  const decreaseHandler = function (id) {
    onRemoveItems(id);
  };

  return (
    <div className="sm:flex-row gap-5 flex flex-col">
      <img src={cartItem.image} alt={cartItem.name} className="h-20 w-20" />
      <div>
        <p>{cartItem.name}</p>
        <p>${cartItem.price}</p>
        <div className="mt-2 flex items-center gap-2">
          <button
            className="w-5 h-5 rounded-full bg-slate-900 text-center text-white text-xs"
            onClick={() => decreaseHandler(cartItem.id)}
          >
            -
          </button>
          <span className="w-10 text-center">{cartItem.quantity}</span>
          <button
            className="w-5 h-5 rounded-full bg-slate-900 text-center text-white text-xs"
            onClick={() => increaseHandler(cartItem)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
