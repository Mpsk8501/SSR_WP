import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import clientConfig from './clientConfig'

const client = new ApolloClient({
  link: createHttpLink({
    url: clientConfig.graphqlUrl
  }),
  cache: new InMemoryCache()
})

export default client