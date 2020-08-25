import React from 'react'
import classes from './LandingComponent.module.scss'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'

const LandingComponent = () => {
  const loading = useSelector(state => state.posts.loading)
  const posts = useSelector(state => state.posts.posts)
  const postss = posts.filter(post => post.categories === 17)
  return (
      <div className={classes.LandingComponent}>
        <div className="container">
          {!loading
              ? postss.map(item =>
                  <div key={item.id}>
                    <br/>
                    <hr/>
                    <h2>Заголовок: {item.title}</h2>
                    {item.content}
                    <p>{item.media.map(media => {
                          const url = media.media_details.sizes.full.source_url
                          return <img key={media.id} src={url} alt=""/>
                        }
                    )}</p>
                    <i>{item.date}</i>
                    <hr/>
                    <br/>
                  </div>
              )
              : <Loader/>}
        </div>
      </div>
  )
}

export default LandingComponent
