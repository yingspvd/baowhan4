/***
 
Main page of backend**/
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Connect/Express middleware
app.use(cors());

// looks at requests where the Content-Type: application/json
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

// object will contain values of any type instead of just strings
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.use("/user", userRoutes);

// a middleware mounted on /user; will be executed for any type of HTTP request to /user
app.get("/", (req, res) => {
  res.send("Hello to Baowhan API");
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://yingspvd:baowhan@cluster0.w6yyyqx.mongodb.net/?retryWrites=true&w=majority";

// Connect to the database
mongoose
  .connect(CONNECTION_URL, {
    dbName: "BaowhanDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
