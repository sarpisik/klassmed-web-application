import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Img from 'gatsby-image'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(title: { eq: "Kurumsal" }) {
      id
      title
      _rawBody
    }

    image: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <MDBContainer fluid>
        <MDBRow className='service-landing text-white justify-content-center align-items-center py-3'>
          <MDBCol className='d-none d-xl-block' xl={4}>
            <Img
              className='img-fluid rounded-lg shadow-lg'
              fluid={data.image.childImageSharp.fluid}
            />
          </MDBCol>
          <MDBCol sm={6} xl={4}>
            <h1 className='text-uppercase'>{page.title}</h1>

            <BlockContent blocks={page._rawBody || []} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default AboutPage
