import React, { Fragment } from 'react'
import BlockContent from './block-content'
import Img from 'gatsby-image'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

function Product ({ title, _rawBody, categories, mainImage, publishedAt, relatedProducts }) {
  return (
    <MDBContainer>
      <MDBRow className='justify-content-center'>
        <MDBCol sm={8}>
          <h1 className='text-center'>{title}</h1>
          <Img
            style={{ height: '500px' }}
            imgStyle={{
              maxHeight: '100%',
              maxWidth: '100%',
              width: 'inherit',
              height: 'inherit',
              margin: 'auto',
              right: '0px'
            }}
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt}
            className='mx-auto d-block'
          />
          {_rawBody && <BlockContent blocks={_rawBody || []} />}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Product
