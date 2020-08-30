import { useState } from 'react'
import classes from './auth.module.scss'

const Auth = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const changeFormHandler = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  }



  return (
    <div className={classes.auth}>
      <div className="container">
        <form className={'form'} onSubmit={submitHandler}>
          <input
            placeholder={'Email:'}
            className={'input'}
            onChange={changeFormHandler}
            value={formValue.email}
            name={'email'}
            type="text"/>
          <input
            placeholder={'Password:'}
            className={'input'}
            onChange={changeFormHandler}
            value={formValue.password}
            name={'password'}
            type="text"/>
          <div className={classes.formBtnBlock}>
            <button className="btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth
