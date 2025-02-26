import { Router } from "express";

const AIRouter = Router();

AIRouter.get("/trends/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Trends data for ${city}`);
});

AIRouter.get("/recommendations/:city", (req, res) => {
  const city = req.params.city;
  res.send(`Recommendations for ${city}`);
});

export default AIRouter;