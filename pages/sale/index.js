import { MainLayout } from '../../Layout/MainLayout'
import SaleComponent from '../../components/SaleComponent/SaleComponent'
import clientConfig from '../../ConfigDir/clientConfig'
const Sale = ({motors: serverMotors}) => {


  return (
      <MainLayout title={'Распродажа'}>
        <div className={'flexWrapper'}>
          {
            <SaleComponent
                motors={serverMotors}/>
          }
        </div>
      </MainLayout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`${clientConfig.siteUrl}/wp-json/tablepress/api/v1/table/1`)
  const responseData = await response.json()
  responseData.data.forEach(item => {
    item[8] = item[8].split(',',2).join('')
  })
  return {
    props: {motors: responseData.data}
  }
}

export default Sale

