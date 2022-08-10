const { usersList, moviesList } = require("../mydata");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    // we have written `Query` bcuz in typeDefs our main root query is named as `Query`
    users: () => {
      return usersList;
    },
    user: (parent, args) => {
      const myid = args.id;
      const user = _.find(usersList, { id: Number(myid) });
      return user;
    },

    // MOVIE RESOLVERS

    movies: () => {
      return moviesList;
    },

    movie: (parent, args) => {
      const myname = args.name;
      const movie = _.find(moviesList, { name: myname });
      return movie;
    },
  },

  // in user, we want to show movies of btwn 2000 and 2018
  // this is not a query, but abt how we want to display the favMovies field
  User: {
    favMovies: () => {
      return _.filter(
        moviesList,
        (movie) => movie.year >= 2000 && movie.year <= 2018
      );
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;

      const lastid = usersList[usersList.length - 1].id;
      user.id = lastid + 1;

      usersList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, username } = args.input;
      let userUpdate;
      usersList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = username;
          userUpdate = user;
        }
      });

      return userUpdate;
    },

    deleteUser: (parent, args) => {
      const myid = args.id;
      _.remove(usersList, { id: Number(myid) });

      return null;
    },
  },
};

module.exports = { resolvers };
