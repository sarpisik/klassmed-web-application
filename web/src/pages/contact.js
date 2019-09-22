import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDBContainer, MDBRow } from 'mdbreact'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'

import { responsiveTitle1 } from '../components/typography.module.css'
import Contact from '../components/contactForm'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }
  }
`

const ContactPage = props => {
  const { data, errors } = props

  if (errors) return <GraphQLErrorList errors={errors} />

  const page = data.page

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Fragment>
      <SEO title={page.title} />
      <MDBContainer>
        <MDBRow id='contact' className='py-5'>
          <Contact />
        </MDBRow>
      </MDBContainer>
    </Fragment>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
