const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test2');

const Art = mongoose.model('Art', {
  title: String,
  caption: String,
  avail: Boolean
});

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Art {
    id: ID!
    title: String!
    caption: String
    avail: Boolean!
  }
  type Mutation {
    createArt(title: String!, caption: String): Art
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`
  },
  Mutation: {
    // createArt: async (_, {title}) => {
    createArt: async (_, { title, caption }) => {
      caption = caption || ''; // if no caption, set to blank
      const art = new Art({ title, caption, avail: true });
      await art.save();
      return art;
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
