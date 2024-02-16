import Button from '../Button'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

import starwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starwars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS%</Tag>
              <span>R$ 150,000</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starwars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS%</Tag>
              <span>R$ 150,000</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starwars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS%</Tag>
              <span>R$ 150,000</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho1</Quantity>
        <Prices>
          total de R$250 <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Cliqeu aqui para continuar a compra" type="button">
          Continuar a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
