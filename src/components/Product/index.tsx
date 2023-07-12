import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
      exercitationem hic veniam architecto debitis obcaecati dolorum ducimus.
      Qui consectetur eligendi corrupti saepe, atque dolor commodi aliquid odio
      quisquam facere?
    </Descricao>
  </Card>
)

export default Product
