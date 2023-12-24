import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", function (request, response) {
  response.json("My root route.");
});

// if we make the url /jokes?id=2
app.get("/football_scores", function (request, response) {
  let football_scores = [];

  // check if the user has provided a query in the URL (/jokes?id=2)
  if (request.query.id) {
    football_scores = db
      .prepare(`SELECT * FROM football_scores WHERE id=${request.query.id}`)
      .all();
  } else {
    // if the URL has no query, get ALL the jokes
    football_scores = db.prepare("SELECT * FROM football_scores").all();
  }

  // send either the array of all the jokes, or just the one we queried for
  response.json(football_scores);
});

app.post("/football_scores", function (request, response) {
  console.log(request.body);
  const team = request.body.team;
  const results = request.body.results;

  const newFootballScore = db
    .prepare(`INSERT INTO football_scores (team, results) VALUES (?, ?)`)
    .run(team, results);

  response.json(newFootballScore);
});

app.listen(8080, function () {
  console.log("IT'S WORKING!");
});
