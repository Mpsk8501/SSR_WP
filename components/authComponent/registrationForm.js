import { useState } from 'react'
import classes from './auth.module.scss'
import Loader from '../Loader/Loader'


const RegisterForm = () => {

  const [registerState, setRegisterState] = useState({
    username: '',
    password: '',
    userEmail: ''
  })

  const [loading, setLoading] = useState(false)


  const changeFormHandler = (e) => {
    setRegisterState({...registerState, [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const siteUrl = 'http://wp-test/wp-json/wp/v2/users/register'
    const loginData = {
      username: registerState.username,
      password: registerState.password,
      email: registerState.userEmail
    }

    setLoading(true)

    const registerResponse = await fetch(siteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
    })
    const authResponseData = await registerResponse.json()
    setLoading(false)
    console.log(authResponseData)
  }

  const createCommentHandler = async () => {
    const siteUrl = 'http://wp-test/wp-json/wp/v2/comments/id&=31'
    const postData = {
      content: 'sddwwd'
    }

    const response = await fetch(siteUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93cC10ZXN0IiwiaWF0IjoxNTk4ODkxODk1LCJuYmYiOjE1OTg4OTE4OTUsImV4cCI6MTU5OTQ5NjY5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTAifX19.qiaeJqGbV7VKwpWySZFr5iiZOnk4z-iRfw_BkAcDOy4'
      },
      body: JSON.stringify(postData)
    })
  }


  return (
      <div className={classes.auth}>
        <div className="container">
          <div onClick={createCommentHandler} className="btn">create post</div>
          {
            loading
                ? <Loader/>
                : <form className={'form'} onSubmit={submitHandler}>
                    <input
                        placeholder={'Username:'}
                        className={'input'}
                        onChange={changeFormHandler}
                        value={registerState.username}
                        name={'username'}
                        type="text"/>
                    <input
                        placeholder={'Email:'}
                        className={'input'}
                        onChange={changeFormHandler}
                        value={registerState.userEmail}
                        name={'userEmail'}
                        type="text"/>
                    <input
                        placeholder={'Password:'}
                        className={'input'}
                        onChange={changeFormHandler}
                        value={registerState.password}
                        name={'password'}
                        type="text"/>
                    <div className={classes.formBtnBlock}>
                      <button type={'submit'} className="btn">Send</button>
                    </div>
                  </form>
          }
        </div>
      </div>
  )
}

export default RegisterForm