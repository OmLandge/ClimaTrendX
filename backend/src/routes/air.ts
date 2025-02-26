import { Router } from "express";

const AirRouter = Router();

AirRouter.get("/air-quality/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Air quality data for ${city}`);
});

AirRouter.get("/emissions/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Emissions data for ${city}`);
});

export default AirRouter;