const aio = {
  name: "aio",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => aio,
  },
};

export default resolvers;
