import { MainLayout } from '../../Layout/MainLayout'
import Auth from '../../components/authComponent'


export default function Contacts() {
  return (
      <MainLayout title={'Auth'}>
        <div className={'flexWrapper'}>
          <Auth/>
        </div>
      </MainLayout>
  )
}

