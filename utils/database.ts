import { Pool } from "pg";

let conn: any;

if (!conn)
  ({
    user: "postgres",
    password: "mysecretpassword",
    host: "172.17.0.2",
    port: 5432,
    database: "taskdb",
  });

export { conn };
