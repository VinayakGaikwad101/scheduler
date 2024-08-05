import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db-connect.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/Auth-Router.js";

dotenv.config();

const app = express();
connectToMongoDB();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
