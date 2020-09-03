import { ShopLayout } from '../../Layout/ShopLayout/ShopLayout'
import Product from '../../components/wcShopComponent/product'
import clientConfig from '../../clientConfig'

const WcShop = ({products: serverSideProducts}) => {
  console.log(serverSideProducts)
  return (
      <ShopLayout title={'Main'}>
        <div className={'flexWrapper'}>
          <div className="container">
            <div className="goodsContainer">
              {serverSideProducts.length
                  ? serverSideProducts.map(((product,index) => {
                    return <Product key={index} props={product}/>
                  }))
                  : ''
              }
            </div>
          </div>

        </div>
      </ShopLayout>
  )
}

WcShop.getInitialProps = async () =>{
  const res = await fetch(`${clientConfig.siteUrl}/wcShop/getProducts`)
  const productData = await res.json()
  return {
    products: productData
  }

}

export default WcShop