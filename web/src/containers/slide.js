import React from 'react'
import { MDBCarousel, MDBCarouselInner } from 'mdbreact'
import Slide from '../components/slide'

const SlideContainer = ({ images }) => {
  return (
    <MDBCarousel
      style={{ marginTop: '58px' }}
      activeItem={1}
      length={3}
      showControls
      showIndicators
      className='z-depth-1'
      slide
    >
      <MDBCarouselInner>{images.map(Slide)}</MDBCarouselInner>
    </MDBCarousel>
  )
}

export default SlideContainer
