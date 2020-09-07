import { MainLayout } from '../Layout/MainLayout'
import Calculator from '../components/calculator/calculator'
export default function Index() {


  return (
      <MainLayout>
        <div className={'flexWrapper'}>
          <Calculator/>
        </div>
      </MainLayout>
  )
}

