import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import logo from '../images/logo.png'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  const handleClick = () => {
    document.body.classList.toggle('mobile-nav-active')
    showNav ? onHideNav() : onShowNav()
  }

  return (
    <Fragment>
      <button onClick={handleClick} type='button' id='mobile-nav-toggle'>
        <i className={`lnr ${showNav ? 'lnr-cross' : 'lnr-menu'}`} />
      </button>
      <header id='header'>
        <div className='container'>
          <div className='row align-items-center justify-content-between d-flex'>
            <div id='logo'>
              <a href='index.html'>
                <img src={logo} alt='' title='' />
              </a>
            </div>
            <nav id='nav-menu-container'>
              <ul className='nav-menu'>
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
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
