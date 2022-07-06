import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl52gcc8e248k01t34q4wadxy/master',
    cache: new InMemoryCache()
})