import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact'

const Icons = [
  {
    href: 'https://www.facebook.com/Klassmedlazer-1136468556398300/?ref=br_rs',
    icon: 'fa fa-facebook'
  },
  {
    href: 'https://www.instagram.com/klassmedlazerepilasyon/',
    icon: 'fab fa-instagram'
  },
  {
    href: 'mailto:klassmed@gmail.com',
    icon: 'fas fa-envelope'
  }
]

const SocialIcon = ({ icon, ...props }) => (
  <MDBCol key={icon} className='text-center'>
    <a className='social-link' {...props}>
      <i className={`fa-2x ${icon}`} />
    </a>
  </MDBCol>
)

const Form = () => {
  return (
    <div className='wrap-contact3 blue-gradient column-radius'>
      <form className='contact3-form validate-form'>
        <span className='contact3-form-title'>İLETİŞİM</span>
        <MDBRow className='pb-3'>{Icons.map(SocialIcon)}</MDBRow>
        <div className='wrap-input3 validate-input'>
          <input className='input3' type='text' name='name' placeholder='Adınız' required />
          <span className='focus-input3' />
        </div>

        <div className='wrap-input3 validate-input'>
          <input
            className='input3'
            type='email'
            name='email'
            placeholder='Email Adresiniz'
            required
          />
          <span className='focus-input3' />
        </div>
        <div className='wrap-input3 validate-input'>
          <textarea className='input3' name='message' placeholder='Mesajınız' required />
          <span className='focus-input3' />
        </div>

        <div className='container-contact3-form-btn'>
          <button className='contact3-form-btn'>Gönder</button>
        </div>
      </form>
    </div>
  )
}

export default Form
