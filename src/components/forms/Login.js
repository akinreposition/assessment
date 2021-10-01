import React, { useState, } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import AutomainContext from '../../context/automain/automainContext'
import showPwdImg from '../../assets/svg/show-password.svg';
import hidePwdImg from '../../assets/svg/hide-password.svg';

export const Login = () => {
//   const automainContext = useContext(AutomainContext);
//   const { userLogin } = automainContext;

  const [ email, setEmail] = useState ("");
  const [ password, setPassword] = useState ("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    // const loginData = { email, password }
    //   userLogin(loginData)
      setTimeout(() => {
        history.push('/dashboard')
      }, 4000)
    
  }
    return (
        <div style={{ marginTop: '50px'}}>
          <div className="card ba b--black-10 center">
            <div className='login-grid__white'>
              <h6 className='login-AccountNull'>
                Don’t have an account
                <Link to='sign-up'>
                  <strong> Create Account</strong>
                </Link>
              </h6>
            <h3 className='form-header'>Welcome Back</h3>
            <form className='login-form' autoComplete="true" onSubmit={onSubmit}>
              <div className='input-field my-1'>
                <input 
                type='email'
                className='input-box'
                required 
                name="email"
                value={email}
                onChange={(e) => setEmail( e.target.value )}/>
                <label>Email Address</label>
              </div>
              <div className='input-field my-1 pwd-container'>
                  <input 
                  type={isRevealPwd ? "text" : "password"} 
                  className='input-box' 
                  required pattern=".{8,}"
                  name= "password"
                  value={password}
                  onChange= {(e) => setPassword(e.target.value)}/>
                  <label htmlFor=''>Password</label>
                  <img
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                    alt="display password"
                    />
                </div>
              <button className='signin-button' type="submit"> Login</button>
              <Link to='/recoverPassword'>
                <h6 className='forget-password'>Forgot Password?</h6>
              </Link>
            </form>
          </div>
        </div>        
    </div>
  )
}
