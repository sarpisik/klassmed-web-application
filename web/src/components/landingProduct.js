import React from 'react'
import Img from 'gatsby-image'

const Product = (image, index) => {
  return (
    <Img
      style={{ maxHeight: '900px' }}
      imgStyle={{
        maxHeight: '100%',
        maxWidth: '100%',
        width: 'inherit',
        margin: 'auto',
        right: '0px'
      }}
      key={index}
      fluid={image}
      className='img-fluid mx-auto d-block'
    />
  )
}

export default Product
