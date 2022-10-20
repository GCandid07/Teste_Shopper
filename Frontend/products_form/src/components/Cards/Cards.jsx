import { useGetProducts } from '../../hooks/useGetProducts'
import Loading from '../Loading/Loading'
import { useContext} from "react";
import GlobalStateContext from '../../global/GlobalStateContext';
import { Container, Product, ProductImage, ProductName, ProductPrice, ProductStock, ProductButton } from './Styles'

export const Cards = () => {
  const { data, loading } = useGetProducts()
  const { functions } = useContext(GlobalStateContext)

  const addProducts = (product, quantity) => {
    functions.addProduct(product, quantity)
  }

  const renderProducts = () => {
    return data.products && data.products.map(product => {
      return (
        <Product key={product.id}>
          <ProductImage>IMAGEM</ProductImage>
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
      {loading 
        ? <Loading />
        : renderProducts()
      }
    </Container>
  )
}
