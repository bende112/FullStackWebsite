import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS football_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    team TEXT,
    results TEXT
  )
`);

db.exec(`
    INSERT INTO football_scores (team, results)
    VALUES
    ('Arsenal', 'win'),
    ('Chelsea', 'Lost'),
    ('Man City','Lost'),
    ('Liverpool', 'Win'),
    ('Norwich', 'Draw')
`);
