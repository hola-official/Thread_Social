import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" })); // parse  json data inside the req body
app.use(express.urlencoded({ extended: true })); // parse form data inside the req body
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome Home🏡");
});
