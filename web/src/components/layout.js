import React from 'react'
import Header from './header'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <div style={{ marginTop: '58px' }}>{children}</div>
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
  </>
)

export default Layout
