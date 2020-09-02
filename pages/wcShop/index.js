
import Shop from './component/shop'
import { ShopLayout } from '../../Layout/ShopLayout/ShopLayout'


const WcShop = () => {
  return (
      <ShopLayout title={'Main'}>
        <div className={'flexWrapper'}>
          <Shop/>
        </div>
      </ShopLayout>
  )
}

export default WcShop