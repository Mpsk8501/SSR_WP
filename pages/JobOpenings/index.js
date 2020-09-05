import React from 'react'

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
  const response = await fetch(`${clientConfig.siteUrl}/wp-json/custom-routes/v1/newjobfiltered`)
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

