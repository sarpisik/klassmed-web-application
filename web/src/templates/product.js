import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Product from '../components/product'
import SEO from '../components/seo'

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
      id
      categories {
        _id
        title
      }
      title
      markdownBody
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
    <Fragment>
      {errors && <SEO title='GraphQL Error' />}
      {product && <SEO title={product.title || 'Untitled'} />}

      {errors && <GraphQLErrorList errors={errors} />}
      {product && <Product {...product} />}
    </Fragment>
  )
}

export default ProductTemplate
