import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Accordion from '../components/accordion'

export const query = graphql`
  query FaqPageQuery {
    page: sanityPage(title: { eq: "Sıkça Sorulan Sorular" }) {
      id
      title
      _rawBody
    }
  }
`

const FaqPage = ({ data, errors }) => {
  if (errors) return <GraphQLErrorList errors={errors} />

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "Sıkça Sorulan Sorular" page data. Open the studio at http://localhost:3333 and add "Sıkça Sorulan Sorular" page data and restart the development server.'
    )
  }

  return (
    <Fragment>
      <SEO title={page.title} />
      <MDBContainer fluid>
        <MDBRow className='landing-background-cover text-white justify-content-center align-items-center'>
          <MDBCol sm={6} xl={4}>
            <h1 className='text-uppercase'>{page.title}</h1>

            <BlockContent blocks={page._rawBody || []} />
          </MDBCol>
        </MDBRow>
        <MDBRow className='justify-content-center py-5'>
          <MDBCol lg={6}>
            <Accordion />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Fragment>
  )
}

export default FaqPage
