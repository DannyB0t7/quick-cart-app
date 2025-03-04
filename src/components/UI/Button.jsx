import React from "react";

function Button({ style = "", children, ...props }) {
  const styles =
    "mt-2 py-1 px-3 border border-1 border-slate-900 rounded-full cursor-pointer text-sm " +
    style;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
