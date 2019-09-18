import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {props.headComponents}
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='css/linearicons.css' />
        <link rel='stylesheet' href='css/font-awesome.min.css' />
        <link rel='stylesheet' href='css/bootstrap.css' />
        <link rel='stylesheet' href='css/magnific-popup.css' />
        <link rel='stylesheet' href='css/nice-select.css' />
        <link rel='stylesheet' href='css/animate.min.css' />
        <link rel='stylesheet' href='css/owl.carousel.css' />
        <link rel='stylesheet' href='css/main.css' />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}

        <script src='js/vendor/jquery-2.2.4.min.js' />
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossOrigin='anonymous'
        />
        <script src='js/vendor/bootstrap.min.js' />
        <script
          type='text/javascript'
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA'
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
