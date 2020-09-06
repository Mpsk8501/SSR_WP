import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import clientConfig from './ConfigDir/clientConfig'

const client = new ApolloClient({
  link: createHttpLink({
    uri: clientConfig.graphqlUrl,
    credentials: 'include',
    headers:{
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)" +
          " Chrome/85.0.4183.83 Safari/537.36",
    }

  }),
  cache: new InMemoryCache()

})

export default client