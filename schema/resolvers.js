const { userList } = require("../mydata");

const resolvers = {
  Query: {
    // we have written `Query` bcuz in typeDefs our main root query is named as `Query`
    users() {
      return userList;
    },
  },
};

module.exports = { resolvers };
