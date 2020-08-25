import React from 'react'
import classes from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={classes.Loader}>
      <div className={classes.innerLoader}>
        <div className={classes.box}></div>
        <div className={classes.box}></div>
        <div className={classes.box}></div>
        <div className={classes.box}></div>
        <div className={classes.box}></div>
      </div>
    </div>
  )
}

export default Loader
