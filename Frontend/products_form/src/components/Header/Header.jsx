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
        <li onClick={() => setters.setModal(!states.modal)}>🛒<span>{states.modal? "Fechar": "Abrir"}</span></li>
      </Menu>
      <ShoppingCart display={states.modal.toString()}/>
    </Container>
  )
}
