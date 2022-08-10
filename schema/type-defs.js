const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  input createUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = Indian
  }
  input updateUsernameInput {
    id: ID!
    username: String!
  }

  type Mutation {
    createUser(input: createUserInput!): User
    updateUsername(input: updateUsernameInput!): User
    deleteUser(id: ID!): User
  }

  enum Nationality {
    Canadian
    Indian
    Pakistani
    Indonesian
    British
  }
`;

module.exports = { typeDefs };
