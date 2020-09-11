import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  //   resolvers:resolvers 모던 자바스트립트
});

server.start(() => console.log("server Runnning"));
