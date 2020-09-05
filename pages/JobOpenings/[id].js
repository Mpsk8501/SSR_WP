import { useRouter } from 'next/router'
import { MainLayout } from '../../Layout/MainLayout'
import classes from './JobOpening.module.scss'
import parse from 'html-react-parser'
import clientConfig from '../../ConfigDir/clientConfig'

export default function oneVacation({vacation: serverVacation}) {
  const router = useRouter()
  const linkClickHandler = () => {
    router.push('/JobOpenings')
  }
  return (
    <MainLayout>
      <div className={'flexWrapper'}>
        <div className={classes.jobOpening}>
          <div className="container">
            <h2>{serverVacation.title}</h2>
            {
              serverVacation.propierties.map((item, index) => {
                return <div key={index} className={classes.oneJob}>
                  <h3>{item.title}</h3>
                  {parse(item.propiertie)}
                </div>
              })
            }
            <div className={classes.btnBlock}><button className={'btn'} onClick={linkClickHandler}>назад</button></div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id
  const response = await fetch(`${clientConfig.siteUrl}/wp-json/custom-routes/v1/newjobfilteredid/${id}`)
  const postData = await response.json()

  const vacation = {
    id: postData[0].id,
    title: postData[0].title,
    propierties:[]
  }
  if(postData[0].propiertiesTitle1){
    vacation.propierties.push({
      propiertie: postData[0].propierties1,
      title: postData[0].propiertiesTitle1
    })
  }
  if(postData[0].propiertiesTitle2){
    vacation.propierties.push({
      propiertie: postData[0].propierties2,
      title: postData[0].propiertiesTitle2
    })
  }
  if(postData[0].propiertiesTitle3){
    vacation.propierties.push({
      propiertie: postData[0].propierties3,
      title: postData[0].propiertiesTitle3
    })
  }
  return {
    props: {vacation}
  }
}
