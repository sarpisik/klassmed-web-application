import productsListItem from '../components/productsListItem'

const ProductsList = ({ products }) => {
  return products.map(productsListItem)
}

export default ProductsList
