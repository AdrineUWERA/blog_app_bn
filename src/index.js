import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.config.js";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

// initialize the express server
const app = express();
app.use(cors());
app.use(morgan("tiny"));

//connect to the mongodb
connectDB();

// parse the request body
app.use(express.json());

// registers the routes
app.use(router);

const port = process.env.PORT;
// listens to the server and the port it is running on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 

export default app;
