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
};

module.exports = { resolvers };
