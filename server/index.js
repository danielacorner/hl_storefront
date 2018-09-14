const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test4');

const Art = mongoose.model('Art', {
  title: String,
  imgUrl: String,
  dimensions: [Number],
  caption: String,
  price: Number,
  avail: Boolean
});

const typeDefs = `
  type Art {
    id: ID!
    title: String!
    imgUrl: String!
    dimensions: [Float]
    caption: String
    price: Float
    avail: Boolean!
  }

  input ArtInput {
    title: String
    imgUrl: String
    dimensions: [Float]
    caption: String
    price: Float
    avail: Boolean
  }

  type Query {
    allArt: [Art]
    art(id: ID!): Art
  }

  type Mutation {
    createArt(input: ArtInput): Art
    updateArt(id: ID!, input: ArtInput): Boolean
    removeArt(id: ID!): Boolean
    removeAllArt: Boolean
  }
`;

const resolvers = {
  Query: {
    allArt: () => Art.find(),
    art: id => Art.findOne({ id: id })
  },
  Mutation: {
    createArt: async (_, { input }) => {
      // optional args
      input.caption = input.caption || ''; // if no value, set to falsy
      input.price = input.price || 0;
      if (input.avail == undefined) input.avail = true;
      const art = new Art(input);
      await art.save();
      return art;
    },
    updateArt: async (_, { id, input }) => {
      // if null or undefined don't update them
      await Art.findOneAndUpdate(id, input);
      return true;
    },
    removeArt: async (_, { id }) => {
      await Art.findOneAndRemove(id);
      return true;
    },
    removeAllArt: async () => {
      await Art.find().remove();
      return true;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  server.start(() => console.log('Server is running on localhost:4000'));
});
