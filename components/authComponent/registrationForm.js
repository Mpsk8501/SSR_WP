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
    const siteUrl = 'http://wp-test//wp-json/wc/v3/customers'
    /*const postData = {
      "title": 'new cart',
      "excerpt": 'jkgkgkkuuuuuu'
    }*/
    console.log(localStorage.getItem('token'))
    const response = await fetch(siteUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${localStorage.getItem('token')}`

      }
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