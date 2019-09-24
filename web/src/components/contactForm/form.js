import React, { useState, Fragment } from 'react'
import { MDBRow, MDBCol, MDBAlert } from 'mdbreact'
import axios from 'axios'

const INITIAL_STATE = {
  name: '',
  email: '',
  text: '',
  isLoading: false,
  isMessageSendSucceed: false,
  error: {
    name: false,
    email: false,
    text: false
  }
}

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

const Spinner = () => (
  <div className='spinner-border' role='status'>
    <span className='sr-only'>Loading...</span>
  </div>
)

const Loading = () => (
  <Fragment>
    <span className='mr-3'>Lütfen Bekleyiniz</span>
    <Spinner />
  </Fragment>
)

const onFormChange = setState => ({ target: { name, value } }) =>
  setState(state => ({ ...state, [name]: value }))

const onFormSubmit = ({ isLoading, error, ...body }, setState) => async event => {
  event.preventDefault()
  try {
    // Display spinner
    setState(state => ({ ...state, isLoading: true }))
    // Make API post
    const response = await axios.post('/api', body)
    // Display success.
    setState(state => ({ ...state, isMessageSendSucceed: true }))
    // Clear form after 2 sec
    await setTimeout(() => {
      setState(INITIAL_STATE)
    }, 2000)
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
      return (
        error.response.data.type &&
        error.response.data.type === 'validation' &&
        setState(state => ({
          ...state,
          isLoading: false,
          error: error.response.data
        }))
      )
    }
    await setState(state => ({
      ...state,
      isLoading: false
    }))
    window.alert(
      'Üzgünüz bir hata oluştuğu için mesajınız iletilemedi. Lütfen diğer iletişim kanallarını deneyiniz.'
    )
    console.log(error)
  }
}

const Form = () => {
  const [{ name, email, text, isLoading, isMessageSendSucceed, error }, setState] = useState(
    INITIAL_STATE
  )
  const onChange = onFormChange(setState)
  const onSubmit = onFormSubmit({ name, email, text }, setState)

  return (
    <div className='wrap-contact3 blue-gradient column-radius'>
      <form onSubmit={onSubmit} onChange={onChange} className='contact3-form validate-form'>
        <span className='contact3-form-title font-weight-bold'>İLETİŞİM</span>
        <MDBRow className='pb-3'>{Icons.map(SocialIcon)}</MDBRow>
        <div className='wrap-input3 validate-input'>
          {isMessageSendSucceed && (
            <MDBAlert color='success'>
              Mesajınız başarılı bir şekilde iletilmiştir. Teşekkür ederiz.
            </MDBAlert>
          )}
          {error.name && <span className='text-danger'>İsim geçersiz.</span>}
          <input
            disabled={isLoading}
            className='input3'
            type='text'
            name='name'
            placeholder='Adınız'
            value={name}
            required
          />
          <span className='focus-input3' />
        </div>

        <div className='wrap-input3 validate-input'>
          {error.email && <span className='text-danger'>Email geçersiz.</span>}
          <input
            disabled={isLoading}
            className='input3'
            type='email'
            name='email'
            value={email}
            placeholder='Email Adresiniz'
            required
          />
          <span className='focus-input3' />
        </div>
        <div className='wrap-input3 validate-input'>
          {error.text && <span className='text-danger'>Mesaj geçersiz.</span>}
          <textarea
            disabled={isLoading}
            className='input3'
            name='text'
            value={text}
            placeholder='Mesajınız'
            required
          />
          <span className='focus-input3' />
        </div>

        <div className='container-contact3-form-btn'>
          <button
            disabled={isLoading}
            className='bg-transparent contact3-form-btn font-weight-bold text-white w-100'
          >
            {isLoading ? <Loading /> : 'Gönder'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
