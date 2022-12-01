import nextConnect from "next-connect";
import getAllJobs from "../../../controller/lowongan_pekerjaan.js";

const handler = nextConnect();
handler.get(getAllJobs);

export default handler;
