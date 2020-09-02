import React from 'react'
import classes from './JobOpeningsComponent.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

const JobOpeningsComponent = ({vacations}) => {
  const router = useRouter()

  return (
      <div className={classes.JobOpeningsComponent}>
        <div className="container">
          <h2>Открытые вакансии:</h2>
         {vacations.map(item =>
              <div className={classes.oneJob}  key={item.id}>
                <h3>{item.title}</h3>
                <p>{ item.excerpt }</p>
                <div className={classes.linkBlock}>
                  <Link
                      href={'/JobOpenings/[id]'}
                      as={`/JobOpenings/${item.id}`}>
                    <button className={'btn'}><a>Подробнее</a></button>
                  </Link>
                </div>
              </div>
            )
          }
        </div>
      </div>
  )
}

export default JobOpeningsComponent
