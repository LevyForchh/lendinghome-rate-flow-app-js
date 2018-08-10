import React, { Component } from 'react'

import { RATE, TERM } from '../lib/loan'
import signUp from '../actions/sign_up'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSignUpClick = this.handleSignUpClick.bind(this)
  }

  handleSignUpClick () {
    const { email } = this.state

    if (email) {
      signUp(email)
    } else {
      window.alert('please provide your email to sign up')
    }
  }

  handleEmailChange (e) {
    this.setState({
      email: e.target.value
    })
  }

  render () {
    return (
      <div className="hero">
        <div className="hero-body container">
          <div className="title">
            Welcome, get your {RATE}% {TERM / 12}-month loan now!
          </div>

          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Email"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </div>
          </div>
          <button className="button is-success" onClick={this.handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    )
  }
}
