import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import clientConfig from './clientConfig'

const client = new ApolloClient({
  link: createHttpLink({
    uri: clientConfig.graphqlUrl,

  }),
  //url: clientConfig.graphqlUrl,
  cache: new InMemoryCache()

})

export default client