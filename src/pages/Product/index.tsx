import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return <div>produto {id}</div>
}

export default Product
