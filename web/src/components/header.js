import React, { Fragment, useState } from 'react'
import { globalHistory } from '@reach/router'
import { Link } from 'gatsby'
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse } from 'mdbreact'
import logo from '../images/logo.png'

const bgColor = { backgroundColor: '#04091e' }
const links = [
  { name: 'anasayfa', path: '/' },
  { name: 'kurumsal', path: '/about' },
  { name: 'ürünlerimiz', path: '/products' },
  { name: 'teknik destek', path: '/services' }
]
const toggleNavList = collapse => !collapse

const Header = () => {
  const [collapse, setCollapse] = useState(false)

  return (
    <Fragment>
      <MDBNavbar style={bgColor} dark expand='md' scrolling fixed='top'>
        <Link className='nav-link w-25' to='/'>
          <img src={logo} alt='klassmed logo' title='Klassmed Logo' />
        </Link>
        <MDBNavbarToggler onClick={() => setCollapse(toggleNavList)} />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav right>
            {links.map(({ name, path }) => (
              <MDBNavItem active={path === globalHistory.location.pathname}>
                <Link className='nav-link text-capitalize' to={path}>
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
