import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { filterOutProducts, mapImagesToFluid } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import SlideContainer from '../containers/slide'
import ProductContainer from '../containers/product'
import ProductsList from '../containers/productsList'
import Accordion from '../components/accordion'

export const query = graphql`
  query IndexPageQuery {
    slides: allSanitySlide {
      edges {
        node {
          mainImage {
            asset {
              fluid(maxWidth: 2560) {
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

  if (errors) return <GraphQLErrorList errors={errors} />

  const slideImages = (data || {}).slides ? mapImagesToFluid(data.slides) : []
  const landingProductImage = (data || {}).landingProduct
    ? mapImagesToFluid(data.landingProduct)
    : []
  const productNodes = (data || {}).products ? filterOutProducts(data.products) : []

  return (
    <Fragment>
      <SEO title='Anasayfa' />
      <SlideContainer images={slideImages} />
      <section className='top-course-area section-gap'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10'>HİZMETLERİMİZ</h1>
              </div>
            </div>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-3 course-left'>
              <div className='single-course'>
                <span className='lnr lnr-rocket' />
                <h4>Lazer Ekipmanları</h4>
                <p>
                  Klassmed Lazer, uzmanlık alanı olan "Lazer Ekipmanları" üretiminde yüksek atım
                  kapasitesi ve kaliteli sonuçlar doğuran (IPL) cihazlarını müşterilerinin
                  kullanımına sunmuştur.
                </p>
              </div>
              <div className='single-course'>
                <span className='lnr lnr-highlight' />
                <h4>ND Yag - Dövme Silme</h4>
                <p>
                  Klassmed Lazer, üretmiş olduğu IPL cihazlar ile sektörde kendini ispatlamış ve ND
                  Yağ teknolojisini de müşterilerinin kullanımına sunmuştur.
                </p>
              </div>
            </div>
            <div className='col-lg-6 course-middle'>
              <ProductContainer products={landingProductImage} />
            </div>
            <div className='col-lg-3 course-right'>
              <div className='single-course'>
                <span className='lnr lnr-cog' />
                <h4>Teknik Servis</h4>
                <p>
                  İster Klassmed müşterisi olun ister başka bir cihazınız olsun, cihazlarınızın
                  bakımları ve arıza vermiş olan Lazer epilasyon cihazlarınız için Klassmed Lazer
                  teknik ekibi sizlerinizin her daim hizmetinizdedir.
                </p>
              </div>
              <div className='single-course'>
                <span className='lnr lnr-magic-wand' />
                <h4>Orjinal Başlık</h4>
                <p>
                  Klassmed Teknoloji tarafından ince uğraşlar ile piyasaya sunulmuş bir IPL başlık
                  teknolojisidir. Tamamen organik Safir Kristal ile ürettiğimiz bu başlıklar ile
                  iletkenlik seviyesini geliştirerek maksimum sonuçlar elde edilmesine olanak
                  sağlıyor.
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
                Güzellik salonu veya kliniklerinin ihtiyaç duyduğu bütün cihazları bizlerden temin
                etmeniz mümkündür.
              </p>
              <a className='text-uppercase primary-btn' href='#'>
                get details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='unique-feature-area section-gap' id='unique'>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='menu-content pb-60 col-lg-10'>
              <div className='title text-center'>
                <h1 className='mb-10 text-white'>BAZI ÜRÜNLERİMİZ</h1>
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
                <Link to='/faq'>
                  <p>Daha fazlasını göster</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='row justify-content-start'>
            <div className='col-lg-6 faq-left'>
              <Accordion limit={4} />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default IndexPage
