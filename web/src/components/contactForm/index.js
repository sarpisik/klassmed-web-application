import React, { Fragment } from 'react'
import Form from './form'
import Map from './googleMap'
import { MDBCol } from 'mdbreact'
import './index.css'

const Contact = () => (
  <Fragment>
    <MDBCol sm={12} md={6} lg={8}>
      <Map
        isMarkerShown
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div className='map' />}
        containerElement={<div className='map' />}
        mapElement={<div className='column-radius map' style={{ height: `100%` }} />}
      />
    </MDBCol>
    <MDBCol sm={12} md={6} lg={4}>
      <Form />
    </MDBCol>
  </Fragment>
)

export default Contact
