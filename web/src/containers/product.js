import LandingProduct from '../components/landingProduct'

const LandingProductContainer = ({ products }) => {
  return products.map(LandingProduct)
}

export default LandingProductContainer
