import React from 'react'
import Img from 'gatsby-image'
import { MDBCarouselItem, MDBView } from 'mdbreact'

const Slide = (image, index) => (
  <MDBCarouselItem key={index} itemId={index + 1}>
    <MDBView>
      <Img className='d-block w-100' fluid={image} />
    </MDBView>
  </MDBCarouselItem>
)

export default Slide
