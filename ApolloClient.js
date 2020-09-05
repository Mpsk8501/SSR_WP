import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import clientConfig from './ConfigDir/clientConfig'

const client = new ApolloClient({
  link: createHttpLink({
    uri: clientConfig.graphqlUrl
  }),
  cache: new InMemoryCache()

})

export default client