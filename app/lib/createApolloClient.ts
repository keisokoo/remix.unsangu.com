import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => new ApolloClient({
  link: new HttpLink({
    uri: 'https://api-unsangu.obj.kr/graphql',
    fetch
  }),
  cache: new InMemoryCache()
});
export default createApolloClient;