import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./db/dbConnect.js";

dotenv.config({
    path: "./env"
})
const app = express();
cors();

dbConnect();

