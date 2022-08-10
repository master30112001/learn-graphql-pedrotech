const usersList = [
  {
    id: 1,
    name: "vedant",
    username: "master300",
    age: 20,
    nationality: "Indian",
    friends: [
      {
        id: 2,
        name: "akshit",
        username: "akmadan",
        age: 21,
        nationality: "Pakistani",
      },

      {
        id: 3,
        name: "ishan",
        username: "itshan",
        age: 22,
        nationality: "Indonesian",
      },
    ],
  },
  {
    id: 2,
    name: "akshit",
    username: "akmadan",
    age: 21,
    nationality: "Pakistani",
  },
  {
    id: 3,
    name: "ishan",
    username: "itshan",
    age: 22,
    nationality: "Indonesian",
  },
  {
    id: 4,
    name: "tanuj",
    username: "pancho",
    age: 23,
    nationality: "British",
  },
  {
    id: 5,
    name: "karan",
    username: "karwani",
    age: 24,
    nationality: "Canadian",
  },
];

const moviesList = [
  {
    id: 1,
    name: "Inception",
    year: 2015,
    isInTheaters: false,
  },
  {
    id: 2,
    name: "Death on the river Nile",
    year: 2019,
    isInTheaters: false,
  },
  {
    id: 3,
    name: "Zero Dark Thirty",
    year: 2020,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "Dune",
    year: 2000,
    isInTheaters: true,
  },
];

module.exports = { usersList, moviesList };
