import { ShopLayout } from '../../Layout/ShopLayout/ShopLayout'
import Product from '../../components/wcShopComponent/product'
import clientConfig from '../../clientConfig'
import client from '../../ApolloClient'
import gql from 'graphql-tag'

const PRODUCTS_QUERY =gql`query{
 products {
    nodes {
      ... on SimpleProduct {
        id
        productId
        name
        slug
        image {
          title
          uri
          srcSet
          sourceUrl
        }
        onSale
        price
        regularPrice
        salePrice
        description
        galleryImages {
          nodes {
            sourceUrl
            srcSet
            title
            uri
          }
        }
      }
    }
  }
}`

const WcShop = ({products: serverSideProducts}) => {
  console.log(serverSideProducts)
  return (
      <ShopLayout title={'Main'}>
        <div className={'flexWrapper'}>
          <div className="container">
           {/* <div className="goodsContainer">
              {serverSideProducts.length
                  ? serverSideProducts.map(((product,index) => {
                    return <Product key={index} props={product}/>
                  }))
                  : ''
              }
            </div>*/}
          </div>

        </div>
      </ShopLayout>
  )
}

WcShop.getInitialProps = async () =>{
  /*const res = await fetch(`${clientConfig.siteUrl}/wcShop/getProducts`)
  const productData = await res.json()
  return {
    products: productData
  }*/

  const result = await client.query({
    query: PRODUCTS_QUERY
  })

  return {
    products: result.data.products.nodes
  }

}

export default WcShop