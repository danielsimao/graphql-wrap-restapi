const { GraphQLServer } = require("graphql-yoga");
require("isomorphic-fetch");
const md5 = require("md5");

const publicKey = "Insert your public key";
const privateKey = "Insert your private Key";
const ts = Date.now().toString();
const hash = md5(ts + privateKey + publicKey);
const baseUrl = "https://gateway.marvel.com:443/v1/public/";

const resolvers = {
  Query: {
    characters: (parent, args) => {
      const { limit } = args;
      return fetch(
        `${baseUrl}characters?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      ).then(body => body.json());
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log("Server is running on localhost:4000"));
