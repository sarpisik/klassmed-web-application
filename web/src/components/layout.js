import React from 'react'
import Header from './header'

import '../styles/layout.css'
import { Link } from 'gatsby'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <nav id='mobile-nav'>
      <ul className='' style={{ touchAction: 'pan-y' }} id=''>
        <li className='menu-active'>
          <Link to='/'>Anasayfa</Link>
        </li>
        <li>
          <Link to='/about'>Kurumsal</Link>
        </li>
        <li>
          <Link to='/products'>Ürünlerimiz</Link>
        </li>
        <li>
          <Link to='/services'>Teknik Destek</Link>
        </li>
      </ul>
    </nav>
    <div id='mobile-body-overly' />
    <div style={{ marginTop: '58px' }}>{children}</div>
    <footer className='footer-area section-gap'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 col-sm-6'>
            <div className='single-footer-widget'>
              <h6>Hakkımızda</h6>
              <p>
                Klassmed Medikal olarak, 2011 yılında ithalat ürünleri ile başlayan ticari
                hayatımıza 2012 yılından itibaren kendi ürünlerimiz üreterek devam etmekteyiz.
              </p>
              <p className='footer-text'>&copy;{new Date().getFullYear()} Klassmed </p>
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
                    required
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
      <a href='https://sarpisik.com'>
        <p className='footer-text text-center text-white m-0 font-weight-bold'>Made By SARP IŞIK</p>
      </a>
    </footer>

    {/* <div className={styles.content}>{children}</div> */}
    {/* <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>

        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </div>
    </footer> */}
  </>
)

export default Layout
