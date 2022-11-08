import { Loading } from '../Loading/Loading'
import { useState, useContext} from "react";
import GlobalStateContext from '../../global/GlobalStateContext';
import { Container, Product, ProductImage, ProductName, ProductPrice, ProductStock, ProductButton } from './Styles'
import { SucessFlashMessage } from '../FlashMessage/FlashMessage';

export const Cards = () => {
  const { states, functions } = useContext(GlobalStateContext)
  const [ productAdd, setProductAdd ] = useState(false)

  const addProducts = (product, quantity) => {
    functions.addProduct(product, quantity)
    setProductAdd(true)
    setTimeout(() => {
      setProductAdd(false)
    }, 2000)
  }

  const renderProducts = () => {
    return states.products && states.products.map(product => {
      return (
        <Product key={product.id}>
          <ProductImage>Imagem do Produto #{product.id}</ProductImage>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R$ <span>{product.price.toFixed(2).replace('.', ',')}</span></ProductPrice>
          <ProductStock>Estoque: {product.qty_stock}</ProductStock>
          <ProductButton onClick={() => addProducts(product, 1)}>Adicionar</ProductButton>
        </Product>
      )
    })
  }
  
  return (
    <Container>
      {
        productAdd ? <SucessFlashMessage Message="Produto Adicionado com Sucesso!"/> : ""
      }
      {states.loading 
        ? <Loading />
        : renderProducts()
      }
    </Container>
  )
}
