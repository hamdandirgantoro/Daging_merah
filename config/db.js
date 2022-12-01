const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  port: 3006,
  database: "lowongan_pekerjaan",
  socketPath: "/opt/lampp/var/mysql/mysql.sock",
});

pool.getConnection((err) => {
  if (err) {
    console.error("error connecting to db");
  }
  console.log("connected to db");
});

const executeQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    pool.query(query, arrayParams, (err, results, fields) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = { executeQuery };
