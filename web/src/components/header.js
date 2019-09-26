import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from 'mdbreact'
import logo from '../images/logo.svg'

const bgColor = { backgroundColor: '#04091e' }
const links = [
  { name: 'anasayfa', path: '/' },
  { name: 'kurumsal', path: '/about' },
  { name: 'ürünlerimiz', path: '/products' },
  { name: 'teknik destek', path: '/services' },
  { name: 'S.S.S.', path: '/faq' },
  { name: 'iletişim', path: '/contact' }
]
const toggleCollapse = collapse => !collapse

const Header = ({ location: { pathname } }) => {
  const [collapse, setCollapse] = useState(false)

  const toggleNavList = () => setCollapse(toggleCollapse)

  return (
    <Fragment>
      <MDBNavbar
        className='smooth-shadow text-center'
        style={bgColor}
        dark
        expand='md'
        scrolling
        fixed='top'
      >
        <Link className='nav-link logo' to='/'>
          <img src={logo} alt='klassmed logo' title='Klassmed Logo' />
        </Link>
        <MDBNavbarToggler onClick={toggleNavList} />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            {links.map(({ name, path }) => (
              <MDBNavItem key={path} active={path === pathname}>
                <Link onClick={toggleNavList} className='nav-link text-capitalize' to={path}>
                  {name}
                </Link>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Fragment>
  )
}

export default Header
