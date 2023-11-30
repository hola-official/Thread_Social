const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" })); // parse  json data inside the req body
app.use(express.urlencoded({ extended: true })); // parse form data inside the req body
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
    res.send("Welcome Home🏡");
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
    })
    .catch((err) => console.log(err));
