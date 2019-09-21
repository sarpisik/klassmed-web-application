import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import Img from 'gatsby-image'

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

  return (
    <Fragment>
      <SEO title={page.title} />
      <MDBContainer fluid>
        <MDBRow className='service-landing text-white justify-content-center'>
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
        <MDBRow>
          <MDBCol sm={6}>
            <h4 className='service-title odd p-2 text-white'>IPL LAMBA DEĞİŞİMİ</h4>
            <p>
              Firmamız bünyesinde Heraus Firstlight ve Amerikan olmak üzere 3 tip lamba
              kullanılmaktadır. Prensip gereği kalitesiz üretim lamba kullanılmamaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title even p-2 text-white'>IPL BAŞLIK TAMİRİ</h4>
            <p>
              Tüm marka model IPL cihazları için başlık tamiri ve yeni başlık. Tüm modeller için
              uyumlu SHR başlık tarafımızdan temin edilmektedir.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title odd p-2 text-white'>IPL POWER TAMİRİ</h4>
            <p>
              IPL Power ünitelerinin ve ekran kartlarının tamiri tarafımızdan yapılmaktadır.
              Bilgisayar kontrollü arıza tespit cihazları sayesinde arıza bulma daha kısa zamanda
              yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title even p-2 text-white'>DİODE POWER TAMİRİ</h4>
            <p>
              Diod Power ünitelerinin ve ekran kartlarının tamiri tarafımızdan yapılmaktadır.
              Bilgisayar kontrollü arıza tespit cihazları sayesinde arıza bulma daha kısa zamanda
              yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title odd p-2 text-white'>LAZER GENEL BAKIM</h4>
            <p>
              Tüm Lazer sistemleri ve diğer salon ekipmanları için ister sözleşmeliister servis
              talep doğrultusunda cihaz bakımları,su değişimi,su filtresi değişimi mümkünse yerinde
              değilse servis merkezinde yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title even p-2 text-white'>ALEXANDIRATE SYSTEM POWER TAMİRİ</h4>
            <p>
              Alexandirate power ünitelerinin ve ekran kartlarının tamiri tarafımızdan
              yapılmaktadır. Bilgisayar kontrollü arıza tespit cihazları sayesinde arıza bulma daha
              kısa zamanda yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title odd p-2 text-white'>ALEXANDIRATE CHAMBER DEĞİŞİMİ</h4>
            <p>
              Alexandirate system cihazların chamber değişimleri özel kontrol cihazları ile
              kalibrasyonu yapılarak garantili bir şekilde teslim edilmektedir.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title even p-2 text-white'>DIODE BAŞLIK VE BAR DEĞİŞİMİ</h4>
            <p>
              Tüm model ve marka diode lazer cihazı başlık temini ve bar değişimi uzaman ekibimiz
              tarafından yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title odd p-2 text-white'>
              LAZER ÜNİTLERİ ŞİFRE KALDIRMA VE KONTUR YÜKLEME
            </h4>
            <p>
              Tüm lazer üniteleri şifre kaldırma ve kontur yükleme işlemi uzman ekibimiz tarafından
              yapılmaktadır.
            </p>
          </MDBCol>
          <MDBCol sm={6}>
            <h4 className='service-title even p-2 text-white'>
              SOĞUK HAVA ÜFLEME IPL CİHAZ TAMİRİ
            </h4>
            <p>
              Tüm hava üemeli IPL cihazların başlık temini, power kart tamiri, ekran tamiri, lamba
              değişimi, kontur yükleme, şifre kaldırma, soğutma ünitesi tamiri uzman ekibimiz
              tarafından yapılmaktadır. Bilgisayar kontrollü arıza tespit cihazları sayesinde arıza
              bulma daha kısa zamanda yapılmaktadır.
            </p>
          </MDBCol>
        </MDBRow>
      </Container>
    </Fragment>
  )
}

export default ServicesPage
