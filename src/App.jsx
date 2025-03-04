import React, { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { PRODUCTS } from "./PRODUCTS";
import Modal from "./components/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const openCartHandler = function () {
    // console.log("modal open");
    setIsModal((prevState) => !prevState);
  };

  const closeCartHandler = function () {
    setIsModal((prevState) => !prevState);
  };

  const addToCartHandler = function (product) {
    // console.log(product);
    setCartItems((prevState) => {
      const updatedItem = [...prevState]; //creating a copy

      const exsistingItemIndex = updatedItem.findIndex(
        (item) => item.id === product.id
      );

      if (exsistingItemIndex != -1) {
        const exsistingItem = updatedItem[exsistingItemIndex];

        updatedItem[exsistingItemIndex] = {
          ...exsistingItem,
          quantity: exsistingItem.quantity + 1,
        };
      } else {
        updatedItem.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }

      return updatedItem;
    });
  };

  const removeCartHandler = function (id) {
    // console.log(id);
    setCartItems((prevState) => {
      const updatedItem = [...prevState]; //creating a copy

      const exsistingItemIndex = updatedItem.findIndex(
        (item) => item.id === id
      );

      const exsistingItem = updatedItem[exsistingItemIndex];

      if (exsistingItem.quantity > 1) {
        updatedItem[exsistingItemIndex] = {
          ...exsistingItem,
          quantity: exsistingItem.quantity - 1,
        };
      } else {
        updatedItem.splice(exsistingItemIndex, 1); //remove the item
      }

      return updatedItem;
    });
  };
  return (
    <div className="">
      <Modal
        open={isModal}
        onModalClose={closeCartHandler}
        cartItems={cartItems}
        onRemoveItems={removeCartHandler}
        onAddItems={addToCartHandler}
      />
      <Header onModalOpen={openCartHandler} cartItems={cartItems} />
      <ul className="products px-4 py-6">
        {PRODUCTS.map((product) => (
          <Products
            product={product}
            key={product.id}
            onAddToCart={addToCartHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
