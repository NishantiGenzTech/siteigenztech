import React, { Component } from 'react'

export default class ContactForm extends Component {
  render() {
    if (this.props.isOpen === false)
    console.log("3")
    return null
    return (
      <div>
            <div className="modal">
              {this.props.children}
            </div>
            <div className="bg" onClick={e => this.close(e)}/>
          </div>
    )
  }
  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
      console.log("4")
    }
  }
}
