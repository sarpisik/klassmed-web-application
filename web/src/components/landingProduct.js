import React from 'react'
import Img from 'gatsby-image'

const Product = (image, index) => {
  return <Img key={index} fluid={image} className='img-fluid mx-auto d-block' />
}

export default Product
