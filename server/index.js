const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test4');

const Art = mongoose.model('Art', {
  title: String,
  imgUrl: String,
  caption: String,
  price: Number,
  avail: Boolean
});

const typeDefs = `
  type Art {
    id: ID!
    title: String!
    imgUrl: String!
    caption: String
    price: Float
    avail: Boolean!
  }
  type Query {
    allArt: [Art]
    art(id: ID!): Art
  }
  type Mutation {
    createArt(
      title: String!, 
      imgUrl: String!,
      caption: String, 
      price: Float
      ): Art
    updateArt(
      id: ID!, 
      title: String, 
      imgUrl: String,
      caption: String, 
      price: Float, 
      avail: Boolean
      ): Boolean
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
    createArt: async (_, { title, imgUrl, caption, price }) => {
      // optional args
      caption = caption || ''; // if no value, set to falsy
      price = price || 0;
      const art = new Art({ title, imgUrl, caption, price, avail: true });
      await art.save();
      return art;
    },
    updateArt: async (
      _,
      // https://coursework.vschool.io/mongoose-crud/
      // the change to be made. Mongoose will smartly combine your existing
      // document with this change, which allows for partial updates too
      { id, title, imgUrl, caption, price, avail }
    ) => {
      if (avail == undefined) {
        // if null or undefined don't return the availability
        await Art.findOneAndUpdate(id, { title, imgUrl, caption, price });
      } else {
        await Art.findOneAndUpdate(id, {
          title,
          imgUrl,
          caption,
          price,
          avail
        });
      }
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
