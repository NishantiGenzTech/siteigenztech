import React from 'react'
import './contactform.css'
export default function ContactForm() {
    return (
        <div>
        <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autocomplete="off" role="main">
        <h1 className="a11y-hidden">Login Form</h1>
        <div>
          <label className="label-email">
            <input type="email" className="text" name="email" placeholder="Email" tabindex="1" required />
            <span className="required">Email</span>
          </label>
        </div>
        <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabindex="3" />
        <label className="label-show-password" for="show-password">
          <span>Show Password</span>
        </label>
        <div>
          <label className="label-password">
            <input type="text" className="text" name="password" placeholder="Password" tabindex="2" required />
            <span className="required">Password</span>
          </label>
        </div>
        <input type="submit" value="Log In" />
        <div className="email">
          <a href="#">Forgot password?</a>
        </div>
        <figure aria-hidden="true">
          <div className="person-body"></div>
          <div className="neck skin"></div>
          <div className="head skin">
            <div className="eyes"></div>
            <div className="mouth"></div>
          </div>
          <div className="hair"></div>
          <div className="ears"></div>
          <div className="shirt-1"></div>
          <div className="shirt-2"></div>
        </figure>
      </form>
        </div>
    )
}
