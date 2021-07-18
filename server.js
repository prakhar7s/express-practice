const express = require("express");
const http = require("https");
const mongoose = require("mongoose");
const Player = require("./models/Player");
const app = express();

// Making an http request
// http.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
//   var d = "";
//   res.on("data", function (chunk) {
//     d += chunk;
//   });

//   res.on("end", function () {
//     d = JSON.parse(d);
//     console.log(d);
//   });
// });

// MongoDb
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("MongoDb connected");
    // createPlayer("prakhar");
    // createPlayer("Prakhar2");
    // createPlayer("Prakhar3");
    // createPlayer("Prakhar4");
    // findPlayer("Prakhar");
    // getAllDocs();
    // delAll();
    // findAndUpdateDoc({ name: "Akash" }, { name: "Amar" });
  }
);

// create doc
async function createPlayer(name = "unknown") {
  const player = await new Player({ name }).save();
  console.log(player);
}

//find doc
async function findPlayer(name) {
  const player = await Player.find({ name });
  console.log(player);
}

//get all docs
async function getAllDocs() {
  const allDocs = await Player.find();
  console.log(allDocs);
}

//del all docs
async function delAll() {
  const player = await Player.deleteMany();
  console.log(player);
}

async function findAndUpdateDoc(findOn, update) {
  const player = await Player.findOneAndUpdate(findOn, update, { new: true });
  console.log(player);
}

app.listen(5000, () => {
  console.log("Server running  at PORT 5000");
});
