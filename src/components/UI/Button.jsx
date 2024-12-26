import React from "react";

function Button({ onClick }) {
  return (
    <button
      className="mt-2 py-1 px-3 border border-1 border-slate-900 rounded-full cursor-pointer text-sm"
      onClick={onClick}
    >
      Add To Cart
    </button>
  );
}

export default Button;
