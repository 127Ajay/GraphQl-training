const express = require("express");
var { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const uri =
  "mongodb+srv://ajayk:test123@cluster0.t1lca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
app.use(cors());
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("db connected successfully");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
