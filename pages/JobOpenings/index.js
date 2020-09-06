import React, { useEffect } from 'react'

import { MainLayout } from '../../Layout/MainLayout'
import JobOpeningsComponent from '../../components/JobOpeningsComponent/JobOpeningsComponent'
import clientConfig from '../../ConfigDir/clientConfig'


const JobOpenings = ({vacations : serverVacations}) => {

  return (
    <MainLayout title={'Вакансии'}>
      <div className={'flexWrapper'}>
        <JobOpeningsComponent vacations={serverVacations}/>
      </div>
    </MainLayout>

  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`${clientConfig.siteUrl}/wp-json/custom-routes/v1/newjobfiltered`,
      {
        headers:{
          "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)" +
              " Chrome/85.0.4183.83 Safari/537.36",
          "cookie":"beget=begetok"
        }
      })

  const responseData = await response.json()
  const vacations = []
  responseData.forEach(postData => {
    const vacation = {
      id: postData.id,
      title: postData.title,
      excerpt: postData.excerpt,
    }
    vacations.push(vacation)
  })
  return {
    props: {vacations}
  }
}

export default JobOpenings

