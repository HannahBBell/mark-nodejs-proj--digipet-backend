import express from "express";
import { getDigipet, resetDigipet, walkDigipet } from "./digipet";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Digipet, the totally original digital pet game! Keep your pet happy, healthy and well-disciplined to win the game. If in doubt, check out the /instructions endpoint!",
  });
});

app.get("/digipet/hatch", (req, res) => {
  if (getDigipet()) {
    res.json({
      message: "You can't hatch a digipet now because you already have one!",
      digipet: getDigipet(),
    });
  } else {
    resetDigipet();
    res.json({
      message: "You have hatched an adorable new digipet. Just the cutest.",
      digipet: getDigipet,
    });
  }
});

app.get("/digipet/walk", (req, res) => {
  // check the user has a digipet to walk
  if (getDigipet()) {
    walkDigipet();
    res.json({
      message: "You walked your digipet. It looks happier now!",
      digipet: getDigipet(),
    });
  }
});

app.get("/digipet/reset", (req, res) => {
  res.json({
    message:
      "Are you sure you want to reset your digipet? It's a bit inhumane, in all honesty. Please visit /digipet/reset/confirm to confirm that you want to reset your digipet. This cannot be undone!",
  });
});

export default app;
