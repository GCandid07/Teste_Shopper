import { useEffect, useState } from "react";
import { getProducts, editStock, shoppingCartCreate, createOrder, createShipping } from "../services/ApiRequest";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ cart, setCart ] = useState([]);
  const [ subtotal, setSubtotal ] = useState(0);
  const [ modalShopping, setModalShopping ] = useState(false);
  const [ shipping, setShipping ] = useState([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = async() => {
    setLoading(true);
    setProducts(await getProducts());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

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
        alert("Quantidade excede o limite.");
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
    const token = localStorage.getItem("token")
    const orderBody = {
      token
    }
    const orderID = await createOrder(orderBody);
    console.log(orderID)

    const shippingBody = {
      order_id: orderID,
      initial: shipping.initialDateTime?.toISOString()?.slice(0, 19)?.replace('T', ' '),
      final: shipping.finalDateTime?.toISOString()?.slice(0, 19)?.replace('T', ' ')
    };

    await createShipping(shippingBody);
    
    await Promise.all(states.cart && states.cart.map(async (product) => {

      const stockBody = {
        qty_stock: product.qty_stock - product.quantity
      };

      editStock(product.id, stockBody);

      const cartBody = {
        quantity: product.quantity,
        price: product.price,
        order_id: orderID,
        product_id: product.id
      };

      shoppingCartCreate(cartBody);
    }))
    setCart([]);
    setSubtotal(0);
    setTimeout(() => {
      handleGetProducts();
    }, 300);
    setModalShopping(!states.modalShopping);
  };

  const states = {products, loading, cart, subtotal, modalShopping, shipping};
  const setters = {setProducts, setLoading, setCart, setSubtotal, setModalShopping, setShipping};
  const requests = {};
  const functions = {handleGetProducts, addProduct, removeProduct, buyProducts};

  return(
    <GlobalStateContext.Provider value={{states,setters,requests,functions}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
