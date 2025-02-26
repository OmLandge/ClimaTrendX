import { Router } from "express";

const WeatherRouter = Router();

WeatherRouter.get("/current/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Current weather in ${city}`);
});

WeatherRouter.get("/forecast/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Forecast for ${city}`);
});

WeatherRouter.get("/historical/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Historical weather data for ${city}`);
});

export default WeatherRouter;