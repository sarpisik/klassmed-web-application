import React, { Fragment, useState } from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, mapImagesToFluid } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import SlideContainer from '../containers/slide'
import ProductContainer from '../containers/product'

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
          }
        }
      }
    }

    products: allSanityProduct(limit: 1, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
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
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []
  const slideImages = (data || {}).slides ? mapImagesToFluid(data.slides) : []
  const productImage = (data || {}).products ? mapImagesToFluid(data.products) : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {/* <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes && (
          <ProjectPreviewGrid
            title='Latest projects'
            nodes={projectNodes}
            browseMoreHref='/projects/'
          />
        )}
        {postNodes && (
          <BlogPostPreviewGrid
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
          />
        )} */}
      <nav id='mobile-nav'>
        <ul className='' style={{ touchAction: 'pan-y' }} id=''>
          <li className='menu-active'>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#service'>Service</a>
          </li>
          <li>
            <a href='#unique'>Unique Feature</a>
          </li>
          <li>
            <a href='#review'>Review</a>
          </li>
          <li>
            <a href='#faq'>Faq</a>
          </li>
          <li className='menu-has-children'>
            <i className='lnr lnr-chevron-down' />
            <a href='' className='sf-with-ul'>
              Pages
            </a>
            <ul style={{ display: 'none' }}>
              <li>
                <a href='generic.html'>Generic</a>
              </li>
              <li>
                <a href='elements.html'>Elements</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id='mobile-body-overly' />
      <SlideContainer images={slideImages} />

      <section className='top-course-area section-gap'>
        <ProductContainer products={productImage} />
      </section>

      <section className='home-about-area'>
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 no-padding home-about-left'>
              <img className='img-fluid' src='img/about-img.jpg' alt='' />
            </div>
            <div className='col-lg-6 no-padding home-about-right'>
              <h1>
                Globally Connected <br />
                by Large Network
              </h1>
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
                <h1 className='mb-10 text-white'>Some Features that Made us Unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-unique-product'>
                <img className='img-fluid' src='img/u1.jpg' alt='' />
                <div className='desc'>
                  <h4>Apple Watch White</h4>
                  <h6>£399.00</h6>
                  <a className='text-uppercase primary-btn' href='#'>
                    Pre Order
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-unique-product'>
                <img className='img-fluid' src='img/u2.jpg' alt='' />
                <div className='desc'>
                  <h4>Apple Watch White</h4>
                  <h6>£399.00</h6>
                  <a className='text-uppercase primary-btn' href='#'>
                    Pre Order
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-unique-product'>
                <img className='img-fluid' src='img/u3.jpg' alt='' />
                <div className='desc'>
                  <h4>Apple Watch White</h4>
                  <h6>£399.00</h6>
                  <a className='text-uppercase primary-btn' href='#'>
                    Pre Order
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-unique-product'>
                <img className='img-fluid' src='img/u4.jpg' alt='' />
                <div className='desc'>
                  <h4>Apple Watch White</h4>
                  <h6>£399.00</h6>
                  <a className='text-uppercase primary-btn' href='#'>
                    Pre Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='review-area section-gap' id='review'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10'>Some Features that Made us Unique</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Cody Hines</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Chad Herrera</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Andre Gonzalez</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Jon Banks</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Landon Houston</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-review'>
                <h4>Nelle Wade</h4>
                <p>
                  Accessories Here you can find the best computer accessory for your laptop,
                  monitor, printer, scanner, speaker.
                </p>
                <div className='star'>
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star checked' />
                  <span className='fa fa-star' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='faq-area section-gap' id='faq'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10'>Frequently Asked Questions</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col-lg-6 faq-left'>
              <div id='accordion'>
                <div className='card'>
                  <div className='card-header' id='headingOne'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link'
                        data-toggle='collapse'
                        data-target='#collapseOne'
                        aria-expanded
                        aria-controls='collapseOne'
                      >
                        Are your Templates responsive?
                      </button>
                    </h5>
                  </div>

                  <div
                    id='collapseOne'
                    className='collapse show'
                    aria-labelledby='headingOne'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header' id='headingTwo'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed'
                        data-toggle='collapse'
                        data-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        Does it have all the plugin as mentioned?
                      </button>
                    </h5>
                  </div>
                  <div
                    id='collapseTwo'
                    className='collapse'
                    aria-labelledby='headingTwo'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header' id='headingThree'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed'
                        data-toggle='collapse'
                        data-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Can i use the these theme for my client?
                      </button>
                    </h5>
                  </div>
                  <div
                    id='collapseThree'
                    className='collapse'
                    aria-labelledby='headingThree'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header' id='headingThree'>
                    <h5 className='mb-0'>
                      <button
                        className='btn btn-link collapsed'
                        data-toggle='collapse'
                        data-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Are your Templates responsive?
                      </button>
                    </h5>
                  </div>
                  <div
                    id='collapseFour'
                    className='collapse'
                    aria-labelledby='headingThree'
                    data-parent='#accordion'
                  >
                    <div className='card-body'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer-area section-gap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>About Us</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore dolore magna aliqua.
                </p>
                <p className='footer-text'>
                  Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is
                  made with <i className='fa fa-heart-o' aria-hidden /> by{' '}
                  <a href='https://colorlib.com' target='_blank'>
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-5  col-md-6 col-sm-6'>
              <div className='single-footer-widget'>
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className='' id='mc_embed_signup'>
                  <form
                    target='_blank'
                    noValidate
                    action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01'
                    method='get'
                    className='form-inline'
                  >
                    <input
                      className='form-control'
                      name='EMAIL'
                      placeholder='Enter Email'
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Email '"
                      required=''
                      type='email'
                    />
                    <button className='click-btn btn btn-default'>
                      <i className='fa fa-long-arrow-right' aria-hidden />
                    </button>
                    <div
                      style={{
                        position: 'absolute',
                        left: ' -5000px'
                      }}
                    >
                      <input
                        name='b_36c4fd991d266f23781ded980_aefe40901a'
                        tabIndex='-1'
                        value=''
                        type='text'
                      />
                    </div>

                    <div className='info' />
                  </form>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6 social-widget'>
              <div className='single-footer-widget'>
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className='footer-social d-flex align-items-center'>
                  <a href='#'>
                    <i className='fa fa-facebook' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-dribbble' />
                  </a>
                  <a href='#'>
                    <i className='fa fa-behance' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
