import React from 'react'
import Product from '../components/product'

const ProductContainer = ({ products }) => {
  return products.map(Product)
}

export default ProductContainer
