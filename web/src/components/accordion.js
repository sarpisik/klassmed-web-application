import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MDBBtn, MDBCollapse } from 'mdbreact'
import { filterOutQuestions } from '../lib/helpers'

const toggleAccordion = (id, handler) => () => handler(id)

const Question = ({ collapseID, setCollapseID }) => ({ id, question, answer }) => (
  <div key={id} className='card smooth-shadow mb-2'>
    <div className='card-header blue-gradient'>
      <h5 className='mb-0'>
        <MDBBtn
          block
          className='shadow-none text-capitalize text-left'
          onClick={toggleAccordion(id, setCollapseID)}
        >
          {question}
        </MDBBtn>
      </h5>
    </div>

    <MDBCollapse id={id} isOpen={collapseID}>
      <div className='card-body'>{answer}</div>
    </MDBCollapse>
  </div>
)

const Accordion = ({ limit }) => (
  <StaticQuery
    query={graphql`
      query FaqQuery {
        questions: allSanityFaq(sort: { fields: _createdAt, order: ASC }) {
          edges {
            node {
              id
              question
              answer
            }
          }
        }
      }
    `}
    render={data => {
      const questions = filterOutQuestions(data.questions, limit || data.questions.edges.length)
      const [collapseID, setCollapseID] = useState(questions[0].id)
      const questionHandler = Question({ collapseID, setCollapseID })
      return <div id='accordion'>{questions.map(questionHandler)}</div>
    }}
  />
)

export default Accordion
