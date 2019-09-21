import React from 'react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

function Product ({ title, markdownBody, mainImage }) {
  return (
    <MDBContainer fluid>
      <MDBRow className='landing-background-cover text-white justify-content-center'>
        <MDBCol>
          <h1 className='text-center'>{title}</h1>
        </MDBCol>
      </MDBRow>
      <MDBRow className='justify-content-center py-5'>
        <MDBCol sm={12} md={8} lg={6} xl={4}>
          <Img
            style={{ maxHeight: '500px' }}
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
        </MDBCol>
        {markdownBody && (
          <MDBCol
            style={{ fontSize: 'x-large' }}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            className='flex align-items-center'
          >
            <div className='py-5'>
              <ReactMarkdown source={markdownBody || ''} />
            </div>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  )
}

export default Product
