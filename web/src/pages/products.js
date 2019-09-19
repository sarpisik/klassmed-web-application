import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { filterOutProducts } from '../lib/helpers'
import ProductsList from '../containers/productsList'
import { MDBRow } from 'mdbreact'

export const query = graphql`
  query ProductsPageQuery {
    products: allSanityProduct(sort: { fields: [publishedAt], order: DESC }, filter: {}) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
        }
      }
    }
  }
`

const ProductsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const productNodes = (data || {}).products ? filterOutProducts(data.products) : []
  return (
    <Layout>
      <SEO title='Products' />
      <Container>
        <MDBRow>
          <ProductsList products={productNodes} />
        </MDBRow>
      </Container>
    </Layout>
  )
}

export default ProductsPage
