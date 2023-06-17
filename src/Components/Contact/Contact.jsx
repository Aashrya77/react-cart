import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="head">
        <h2>Contact Us</h2>
      </div>
      <hr/>
      <div className="form-section">
        <form action="/">
          <label htmlFor="name">Name: </label>
          <input type="name" name='name' />
          <label htmlFor="email">Email: </label>
          <input type="email" name='email' />
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="" cols="10" rows="5"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact