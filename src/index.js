import dotenv from "dotenv";
import dbConnect from "./db/dbConnect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

dbConnect();

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is running at port : ${process.env.PORT}`);
});
