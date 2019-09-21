import React, { Fragment } from 'react'
import SEO from '../components/seo'
import { responsiveTitle1 } from '../components/typography.module.css'
import { MDBContainer } from 'mdbreact'

const NotFoundPage = () => (
  <Fragment>
    <SEO title='404: Not found' />
    <MDBContainer>
      <h1 className={responsiveTitle1}>Not found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </MDBContainer>
  </Fragment>
)

export default NotFoundPage
