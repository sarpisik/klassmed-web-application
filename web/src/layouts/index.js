import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Transition from '../components/transition'
import SEO from '../components/seo'
import Header from '../components/header'
import '../styles/font-awesome.min.css'
import '../styles/linearicons.css'
import '../styles/main.css'
import '../styles/layout.css'

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
                      <a href='#'>
                        <i className='fa fa-3x fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-3x fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-3x fa-dribbble' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-3x fa-behance' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href='https://sarpisik.com'>
              <p className='sarp-isik footer-text text-center p-2 m-0 font-weight-bold'>
                Made By SARP IŞIK
              </p>
            </a>
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
