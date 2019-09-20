import React, { useState } from 'react'
import { MDBBtn, MDBCollapse } from 'mdbreact'

const toggleAccordion = (id, handler) => () => handler(id)

const Accoirdion = () => {
  const [collapseID, setCollapseID] = useState('collapseOne')
  return (
    <div id='accordion'>
      <div className='card'>
        <div className='card-header blue-gradient'>
          <h5 className='mb-0'>
            <MDBBtn className='shadow-none' onClick={toggleAccordion('collapseOne', setCollapseID)}>
              Are your Templates responsive?
            </MDBBtn>
          </h5>
        </div>

        <MDBCollapse id='collapseOne' isOpen={collapseID}>
          <div className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
        </MDBCollapse>
      </div>
      <div className='card'>
        <div className='card-header blue-gradient'>
          <h5 className='mb-0'>
            <MDBBtn className='shadow-none' onClick={toggleAccordion('collapseTwo', setCollapseID)}>
              Does it have all the plugin as mentioned?
            </MDBBtn>
          </h5>
        </div>
        <MDBCollapse id='collapseTwo' isOpen={collapseID}>
          <div className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
        </MDBCollapse>
      </div>
      <div className='card'>
        <div className='card-header blue-gradient'>
          <h5 className='mb-0'>
            <MDBBtn
              className='shadow-none'
              onClick={toggleAccordion('collapseThree', setCollapseID)}
            >
              Can i use the these theme for my client?
            </MDBBtn>
          </h5>
        </div>
        <MDBCollapse id='collapseThree' isOpen={collapseID}>
          <div className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
        </MDBCollapse>
      </div>
      <div className='card'>
        <div className='blue-gradient card-header' id='headingThree'>
          <h5 className='mb-0'>
            <MDBBtn
              className='shadow-none'
              onClick={toggleAccordion('collapseFour', setCollapseID)}
            >
              Are your Templates responsive?
            </MDBBtn>
          </h5>
        </div>
        <MDBCollapse id='collapseFour' isOpen={collapseID}>
          <div className='card-body'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
        </MDBCollapse>
      </div>
    </div>
  )
}

export default Accoirdion
