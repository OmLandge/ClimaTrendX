require("dotenv").config();
import express from "express";
import cors from "cors";
import WeatherRouter from "./routes/weather";
import AirRouter from "./routes/air";
import AIRouter from "./routes/ai";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/weather", WeatherRouter);
app.use("/api/v1/air", AirRouter);
app.use("/api/v1/ai", AIRouter);

app.get("/", (req, res) => {
  res.send("ClimaTrendX Backend!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});