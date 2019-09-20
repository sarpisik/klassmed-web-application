import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const productsListItem = ({ image, slug, title }) => {
  return (
    <div key={slug} className='col-lg-3 col-md-6'>
      <div className='single-unique-product shadow-lg'>
        <Img
          className='img-fluid mx-auto d-block'
          imgStyle={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'inherit',
            height: 'inherit',
            margin: 'auto',
            right: '0px'
          }}
          fluid={image}
        />
        <div className='desc'>
          <h4>{title}</h4>
          <Link className='text-uppercase primary-btn' to={'/products/' + slug}>
            İncele
          </Link>
        </div>
      </div>
    </div>
  )
}

export default productsListItem
