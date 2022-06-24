import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4sgf5ml238s01wb1m3q3mfq/master",
  cache: new InMemoryCache(),
});
