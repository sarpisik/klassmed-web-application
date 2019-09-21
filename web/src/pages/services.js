import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Img from 'gatsby-image'
import { filterOutServices, isOdd } from '../lib/helpers'

const Service = ({ title, description, id }, index) => (
  <MDBCol key={id} sm={6}>
    <h4 className={`service-title ${isOdd(index) ? 'odd' : 'even'} p-2 text-white`}>{title}</h4>
    <p>{description}</p>
  </MDBCol>
)

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPage(title: { eq: "Teknik Hizmet" }) {
      id
      title
      _rawBody
    }

    image_teknik_dunya: file(relativePath: { eq: "teknik_dunya.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image_teknik_destek: file(relativePath: { eq: "teknik_destek.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    services: allSanityService {
      edges {
        node {
          title
          id
          description
        }
      }
    }
  }
`

const ServicesPage = ({ data, errors }) => {
  if (errors) return <GraphQLErrorList errors={errors} />

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "Services" page data. Open the studio at http://localhost:3333 and add "Services" page data and restart the development server.'
    )
  }

  const services = filterOutServices(data.services) || []

  return (
    <Fragment>
      <SEO title={page.title} />
      <MDBContainer fluid>
        <MDBRow className='landing-background-cover text-white justify-content-center'>
          <MDBCol sm={12} md={8} lg={6} xl={4}>
            <Img className='img-fluid' fluid={data.image_teknik_dunya.childImageSharp.fluid} />
          </MDBCol>
          <MDBCol sm={12} md={8} lg={6} xl={4}>
            <Img className='img-fluid' fluid={data.image_teknik_destek.childImageSharp.fluid} />
            <BlockContent blocks={page._rawBody || []} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Container>
        <MDBRow>{services.map(Service)}</MDBRow>
      </Container>
    </Fragment>
  )
}

export default ServicesPage
