import React from 'react'
import './SignIn.css'
export const SignIn = () => {
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input type="text" id="username" name="username" placeholder="USERNAME"/>
        </div>
        <div className="form-group">
          <input type="password" id="password" name="password" placeholder="PASSWORD"/>
        </div>
        <button className='sign-btn' type="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}
