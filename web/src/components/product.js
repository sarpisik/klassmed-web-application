import React from 'react'
import Img from 'gatsby-image'

const Product = image => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='menu-content pb-60 col-lg-10'>
          <div className='title text-center'>
            <h1 className='mb-10'>Top Courses That are open for Students</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
      </div>
      <div className='row justify-content-center align-items-center'>
        <div className='col-lg-3 course-left'>
          <div className='single-course'>
            <span className='lnr lnr-rocket' />
            <a href='#'>
              <h4>High Performance</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
              incid.idunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='single-course'>
            <span className='lnr lnr-cog' />
            <a href='#'>
              <h4>High Performance</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
              incid.idunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className='col-lg-6 course-middle'>
          <Img fluid={image} className='img-fluid mx-auto d-block' />
        </div>
        <div className='col-lg-3 course-right'>
          <div className='single-course'>
            <span className='lnr lnr-apartment' />
            <a href='#'>
              <h4>High Performance</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
              incid.idunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='single-course'>
            <span className='lnr lnr-phone' />
            <a href='#'>
              <h4>High Performance</h4>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor
              incid.idunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
