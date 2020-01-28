const hoons = {
  name: "hoon",
  age: 15,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => hoons
  }
};

export default resolvers;
