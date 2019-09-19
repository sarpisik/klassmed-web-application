import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Product from '../components/product'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      id
      publishedAt
      _rawBody
      categories {
        _id
        title
      }
      relatedProducts {
        title
        _id
        slug {
          current
        }
      }
      title
      slug {
        current
      }
      mainImage {
        asset {
          fluid(maxWidth: 768) {
            ...GatsbySanityImageFluid
          }
        }
        alt
      }
    }
  }
`

const ProductTemplate = props => {
  const { data, errors } = props
  const product = data && data.product
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {product && <SEO title={product.title || 'Untitled'} />}

      {errors && <GraphQLErrorList errors={errors} />}
      {product && <Product {...product} />}
    </Layout>
  )
}

export default ProductTemplate
