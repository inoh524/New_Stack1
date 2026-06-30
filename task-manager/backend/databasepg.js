const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "inoh08",
  database: "try",
});

client.connect();

client.query("SELECT * FROM test_users", (err, res) => {
  if (err) {
    console.log("Error:", err.message);
  } else {
    console.log("Data:", res.rows);
  }

  client.end();
});