/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProductPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const productEdges = (result.data.allSanityProduct || {}).edges || []

  productEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/products/${slug}/`

    reporter.info(`Creating product page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/product.js'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createProductPages(graphql, actions, reporter)
}
