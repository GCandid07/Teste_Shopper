import { useState } from "react";
import { editStock, shoppingCartCreate } from "../services/ApiRequest";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [modal, setModal] = useState(false);

  const addProduct = (product, quantity) => {
    const saveProduct = cart.find(item => product.id === item.id);
    if (saveProduct) {
      if(saveProduct.quantity + quantity <= saveProduct.qty_stock) {
        const newCart = cart.map(item => {
          if(product.id === item.id) {
              return {
                  ...item, quantity: quantity + item.quantity
              };
          };
          return item;
      });
      setCart(newCart);
      } else {
        alert("Quantidade excede o limite.")
      };
    } else {
      const newProduct = {...product, quantity: quantity};
      const newCart = [...cart, newProduct];
      setCart(newCart);
    };

    const newSubtotal = subtotal + (product.price * quantity);
    setSubtotal(newSubtotal);
  };

  const removeProduct = (product) => {
    const newCart = cart.filter((item) => {
      return item.id !== product.id;
    })
    setCart(newCart);

    const newSubtotal = subtotal - (product.price * product.quantity);
    setSubtotal(newSubtotal);
  }

  const buyProducts = async () => {
    const client = JSON.parse(localStorage.getItem('user'));
    const clientID = client[0].id;
    await Promise.all(states.cart && states.cart.map(async (product) => {

      const stockBody = {
        qty_stock: product.qty_stock - product.quantity
      };

      editStock(product.id, stockBody);

      const cartBody = {
        quantity: product.quantity,
        price: product.price,
        client_id: clientID,
        product_id: product.id
      };

      shoppingCartCreate(cartBody);
    }))
  }

  const states = {cart, subtotal, modal};
  const setters = {setCart, setSubtotal, setModal};
  const requests = {};
  const functions = {addProduct, removeProduct, buyProducts};

  return(
    <GlobalStateContext.Provider value={{states,setters,requests,functions}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
