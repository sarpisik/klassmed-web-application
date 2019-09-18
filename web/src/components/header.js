import { Link } from 'gatsby'
import React, { Fragment } from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

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
                <img src='img/logo.png' alt='' title='' />
              </a>
            </div>
            <nav id='nav-menu-container'>
              <ul className='nav-menu'>
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
                  <a href=''>Pages</a>
                  <ul>
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
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
