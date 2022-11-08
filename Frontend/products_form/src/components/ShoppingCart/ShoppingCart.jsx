import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext"
import { DeliveryShipping } from "../DeliveryShipping/DeliveryShipping";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  ContainerModal,
  ContentCart,
  ContentList,
  Footer,
  Products,
  ProductsList,
  TotalPrice
} from "./Styles";

export const ShoppingCart = ({display}) => {
  const { states, functions } = useContext(GlobalStateContext)

  // const successToast = (message) => toast.success(message);
  const failtToast = (message) => toast.error(message);

  const editQuantity = (prod, value) => {
    return states.cart && states.cart.filter(product => {
      if(product.id === prod.id){
        if(product.quantity + value <= product.qty_stock) {
          functions.addProduct(prod, value)
        } else {
          failtToast("Quantidade excede o limite.")
        }
        if(product.quantity + value <= 0) {
          functions.removeProduct(prod)
        }
      }
      return product
    })
  }

  const productInCartRender = () => {
    return states.cart && states.cart?.map(products => {
      return(
        <Products key={products.id}>
          <ProductsList>
            <li>{products.name}</li>
            <li>
              <button value={"disable"} onClick={() => editQuantity(products, 1)}>
                +
              </button>

                <span>{products.quantity}</span>
                
              <button onClick={() => editQuantity(products, -1)}>
                -
              </button>
            </li>
            <li>R$ {products.price}</li>
          </ProductsList>
        </Products>
      )
    })
  }

  return (
    <Container display={display}>
      <ContainerModal display={display}>
        <ContentCart>
            <h1>Meu Carrinho</h1>
            <ToastContainer autoClose={2000} position="top-right" />
            <ContentList>
              <li>Produto</li>
              <li>Qtd</li>
              <li>Preço</li>
            </ContentList>
            {productInCartRender()}
            <Footer>
              <DeliveryShipping />
              <TotalPrice>
                <p>
                  Valor Total: R$ {states.subtotal && states.subtotal.toFixed(2).replace(".", ",")}
                </p>
                <button onClick={functions.buyProducts}>Finalizar</button>
              </TotalPrice>
            </Footer>
        </ContentCart>
      </ContainerModal>
    </Container>
    
  );
};
