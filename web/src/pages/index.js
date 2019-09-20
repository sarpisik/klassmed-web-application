import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { filterOutProducts, mapImagesToFluid } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import SlideContainer from '../containers/slide'
import ProductContainer from '../containers/product'
import ProductsList from '../containers/productsList'
import Accordion from '../components/accordion'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    slides: allSanitySlide {
      edges {
        node {
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

    landingProduct: allSanityProduct(
      limit: 1
      sort: { fields: [publishedAt], order: DESC }
      filter: { categories: { elemMatch: { title: { eq: "lazer" } } } }
    ) {
      edges {
        node {
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
            alt
          }
        }
      }
    }

    otherProduct: file(relativePath: { eq: "cilt_bakım_cihazı.png" }) {
      childImageSharp {
        fluid(maxWidth: 446) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    products: allSanityProduct(limit: 4, sort: { fields: [publishedAt], order: DESC }, filter: {}) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 500) {
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

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const slideImages = (data || {}).slides ? mapImagesToFluid(data.slides) : []
  const landingProductImage = (data || {}).landingProduct
    ? mapImagesToFluid(data.landingProduct)
    : []
  const productNodes = (data || {}).products ? filterOutProducts(data.products) : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <SlideContainer images={slideImages} />

      <section className='top-course-area section-gap'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10'>Top Courses That are open for Students</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-3 course-left'>
              <div className='single-course'>
                <span className='lnr lnr-rocket' />
                <a href='#'>
                  <h4>High Performance</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
                  incid.idunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className='single-course'>
                <span className='lnr lnr-cog' />
                <a href='#'>
                  <h4>High Performance</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
                  incid.idunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className='col-lg-6 course-middle'>
              <ProductContainer products={landingProductImage} />
            </div>
            <div className='col-lg-3 course-right'>
              <div className='single-course'>
                <span className='lnr lnr-apartment' />
                <a href='#'>
                  <h4>High Performance</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
                  incid.idunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className='single-course'>
                <span className='lnr lnr-phone' />
                <a href='#'>
                  <h4>High Performance</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
                  incid.idunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-about-area'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 no-padding home-about-left'>
              <Img className='img-fluid' fluid={data.otherProduct.childImageSharp.fluid} />
            </div>
            <div className='col-lg-6 no-padding home-about-right'>
              <h1>Sadece Lazer Değil...</h1>
              <p>
                <span>We are here to listen from you deliver exellence</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </p>
              <a className='text-uppercase primary-btn' href='#'>
                get details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='service-area section-gap' id='service'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-8 pb-40 header-text'>
              <h1>Some Features that Made us Unique</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-user' />
                  Expert Technicians
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-license' />
                  Professional Service
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-phone' />
                  Great Support
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-rocket' />
                  Technical Skills
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-diamond' />
                  Highly Recomended
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service'>
                <h4>
                  <span className='lnr lnr-bubble' />
                  Positive Reviews
                </h4>
                <p>
                  Usage of the Internet is becoming more common due to rapid advancement of
                  technology and power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='unique-feature-area section-gap' id='unique'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10 text-white'>SON ÜRÜNLERİMİZ</h1>
                <Link to='/products'>
                  <p>Daha fazlasını göster</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>
            <ProductsList products={productNodes} />
          </div>
        </div>
      </section>

      <section className='faq-area section-gap' id='faq'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10'>Sıkça Sorulan Sorular</h1>
              </div>
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col-lg-6 faq-left'>
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
