import React from 'react'
import { hot } from 'react-hot-loader'

import ThankYou from './pages/thank_you'
import SignUp from './pages/sign_up'
import Missing from './pages/missing'

const RateFlowApp = () => {
  let page

  // TODO: switch to a router lib if this gets too complicated?
  switch (window.location.pathname) {
    case '/thank-you':
      page = <ThankYou />
      break
    case '/':
      page = <SignUp />
      break
    default:
      page = <Missing />
      break
  }

  return page
}

export default hot(module)(RateFlowApp)
