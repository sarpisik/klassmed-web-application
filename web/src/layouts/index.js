import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Transition from '../components/transition'
import SEO from '../components/seo'
import Header from '../components/header'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
          title
          description
          keywords
        }
        companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
          name
          address1
          address2
          zipCode
          city
          country
        }
      }
    `}
    render={({ site, companyInfo }) => {
      if (!site) {
        throw new Error(
          'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
        )
      }
      if (!companyInfo) {
        throw new Error(
          'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
        )
      }
      return (
        <Fragment>
          <Header location={location} />
          <SEO title={site.title} description={site.description} keywords={site.keywords} />
          <div style={{ marginTop: '58px' }}>
            <Transition location={location}>{children}</Transition>
          </div>
          <footer className='footer-area section-gap'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-sm-4 flex justify-content-center'>
                  <div className='single-footer-widget text-white'>
                    <h6>Hakkımızda</h6>
                    <p>
                      Klassmed Medikal olarak, 2011 yılında ithalat ürünleri ile başlayan ticari
                      hayatımıza 2012 yılından itibaren kendi ürünlerimiz üreterek devam etmekteyiz.
                    </p>
                    <p className='footer-text'>&copy;{new Date().getFullYear()} Klassmed </p>
                  </div>
                </div>
                <div className='col-sm-4 flex justify-content-center social-widget'>
                  <div className='single-footer-widget w-100'>
                    <h6>Bizi Takip Edin</h6>
                    <div className='footer-social d-flex align-items-center'>
                      <a href='https://www.facebook.com/Klassmedlazer-1136468556398300/?ref=br_rs'>
                        <i className='fa fa-3x fa-facebook' />
                      </a>
                      <a href='https://www.instagram.com/klassmedlazerepilasyon/'>
                        <i className='fab fa-3x fa-instagram' />
                      </a>
                      <a href='mailto:klassmed@gmail.com'>
                        <i className='fas fa-3x fa-envelope' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center footer-text p-2 m-0 font-weight-bold'>
              <a href='https://sarpisik.com' className='smooth-bottom' title='Web Developer'>
                Made By SARP IŞIK
                {/* <p className='sarp-isik footer-text text-center p-2 m-0 font-weight-bold'>
                Made By SARP IŞIK
              </p> */}
              </a>
            </div>
          </footer>
        </Fragment>
      )
    }}
  />
)
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout
