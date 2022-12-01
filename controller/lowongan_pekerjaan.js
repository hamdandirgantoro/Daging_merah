import pool, { executeQuery } from "../config/db";

const getAllJobs = async (req, res) => {
  let dataPekerjaan = await executeQuery("SELECT * from pekerjaan", []);
  res.send(dataPekerjaan);
};

export default getAllJobs;
