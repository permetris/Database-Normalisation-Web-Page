const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const PORT = 8000;
const MONGO_URL =
  "mongodb+srv://josip12:pass1234@database-normalisation.9y8ubic.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);


// Event Listeners
mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!");
});
mongoose.connection.on("error", (err) => {
    console.error(err);
  });

mongoose.connect(MONGO_URL);
server.listen(PORT, () => console.log(`Listening on port: ${PORT}!`));
