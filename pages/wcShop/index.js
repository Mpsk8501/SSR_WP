import { ShopLayout } from '../../Layout/ShopLayout/ShopLayout'
import Product from '../../components/wcShopComponent/product'
import client from '../../ApolloClient'
import gql from 'graphql-tag'

const PRODUCTS_QUERY =gql`query{
 products {
    nodes {
      ... on SimpleProduct {
        productId
        name
        image {
          sourceUrl
        }
        price
        regularPrice
        shortDescription
        slug
        localAttributes {
          nodes {
            name
            options
          }
        }
      }
    }
  }
}`



const WcShop = ({products: serverSideProducts}) => {
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

  const result = await client.query({
    query: PRODUCTS_QUERY
  })

  return {
    products: result.data.products.nodes
  }

}

export default WcShop