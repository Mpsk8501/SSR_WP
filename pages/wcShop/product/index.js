import { ShopLayout } from '../../../Layout/ShopLayout/ShopLayout'
import client from '../../../ApolloClient'
import gql from 'graphql-tag'
import {withRouter} from 'next/router'

const Product = ({product:serverProduct}) => {
  return (
      <ShopLayout title={'Product'}>
        <div className={'flexWrapper'}>
          <div className="container">
            <h1>{serverProduct.description}</h1>
          </div>
        </div>
      </ShopLayout>
  )
}

Product.getInitialProps = async (context) =>{
  const PRODUCT_QUERY =gql` 
  query Product($id:ID!) {
    product(id: $id, idType: DATABASE_ID) {
       ... on SimpleProduct {
      name
      attributes {
        nodes {
          name
          options
        }
      }
      description
      galleryImages {
        nodes {
          title
          sourceUrl
        }
      }
      price
      regularPrice
    }
  }
}`


  const id = context.query.id
  console.log(id)
  const result = await client.query({
    query: PRODUCT_QUERY,
    variables:{id}
  })
  console.log(result)
  return {
    product: result.data.product
  }

}


export default withRouter(Product)
