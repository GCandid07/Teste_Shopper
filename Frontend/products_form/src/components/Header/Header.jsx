import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { Menu, Container } from "./Styles"
import { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

export const Header = () => {

  const {states, setters} = useContext(GlobalStateContext)

  return (
    <Container>
      <Menu>
        <li>Shoppers</li>
        <li onClick={() => setters.setModalShopping(!states.modalShopping)}>🛒<span>{states.modalShopping? "Fechar": "Abrir"}</span></li>
      </Menu>
      <ShoppingCart display={states.modalShopping.toString()}/>
    </Container>
  )
}
