import { useState } from 'react'
import parse from 'html-react-parser';

import classes from './auth.module.scss'
import Loader from '../Loader/Loader'
import delay from '../../helpers/delay'

const Auth = () => {

  const [authState, setAuthState] = useState({
    loggedIn: false,
    error: null,
    token: null,
    username: '',
    password: '',
    userNiceName: '',
    userEmail: ''
  })

  const [loading, setLoading] = useState(false)


  const changeFormHandler = (e) => {
    setAuthState({...authState, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const siteUrl = 'http://wp-test/'
    const loginData = {
      username: authState.username,
      password: authState.password
    }

    setLoading(true)

    const authResponse = await fetch(`${siteUrl}/wp-json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
    })
    const authResponseData = await authResponse.json()
    if(authResponseData.token) {
      setLoading(false)
      console.log(authResponseData)
      setAuthState({
        ...authState,
        token: authResponseData.token,
        loggedIn: true,
        userNiceName: authResponseData.user_nicename,
        userEmail: authResponseData.user_email
      })
      localStorage.setItem('token', authResponseData.token)
      localStorage.setItem('userName', authResponseData.user_nicename)
    }else {
      setAuthState({...authState, error: parse(authResponseData.message)})
      setLoading(false)
      await delay(3000)
      setAuthState({...authState, error: false})
    }

  }



  return (
    <div className={classes.auth}>
      <div className="container">
        {
          loading
              ? <Loader/>
              : authState.error
                ? <span>{authState.error}</span>
                :(
                  <form className={'form'} onSubmit={submitHandler}>
                    <input
                        placeholder={'Username:'}
                        className={'input'}
                        onChange={changeFormHandler}
                        value={authState.username}
                        name={'username'}
                        type="text"/>
                    <input
                        placeholder={'Password:'}
                        className={'input'}
                        onChange={changeFormHandler}
                        value={authState.password}
                        name={'password'}
                        type="text"/>
                    <div className={classes.formBtnBlock}>
                      <button type={'submit'} className="btn">Send</button>
                    </div>
                  </form>
              )
        }
      </div>
    </div>
  )
}

export default Auth
