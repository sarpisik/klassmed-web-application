import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const productsListItem = ({ image, slug, title }) => {
  return (
    <div key={slug} className='col-lg-3 col-md-6'>
      <div className='single-unique-product smooth-shadow'>
        <Img
          className='img-fluid mx-auto d-block'
          style={{
            maxHeight: '300px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
          }}
          imgStyle={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: '100%',
            height: 'inherit',
            margin: 'auto',
            right: '0px'
          }}
          fluid={image}
        />
        <div className='desc'>
          <h4 className='wrapped-title'>{title}</h4>
          <Link
            className='text-uppercase primary-btn blue-gradient product-item mt-3'
            to={'/products/' + slug}
          >
            İncele
          </Link>
        </div>
      </div>
    </div>
  )
}

export default productsListItem
