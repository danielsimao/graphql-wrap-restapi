const { GraphQLServer } = require("graphql-yoga");
require("isomorphic-fetch");
const md5 = require("md5");

const publicKey = "7a8e93b80f75ebc1b8d94bb4325ebcc8";
const privateKey = "87856b50102c03323e534aca0d0d45b54340a492";
const ts = Date.now().toString();
const hash = md5(ts + privateKey + publicKey);
const baseUrl = "https://gateway.marvel.com:443/v1/public/";

const resolvers = {
  Query: {
    getCharacters: (parent, args) => {
      const { limit } = args;
      const limitParameter = limit ? `limit=${limit}` : "";
      return fetch(
        `${baseUrl}characters?${limitParameter}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      ).then(body => body.json());
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});
server.start(() => console.log("Server is running on localhost:4000"));
