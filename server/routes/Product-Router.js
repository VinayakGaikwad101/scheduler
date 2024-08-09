import express from "express";
import authValidation from "../middlewares/Auth.js";

const test_router = express.Router();

test_router.get("/", authValidation, (req, res) => {
  // we can always do req.user in any api/function/route to get the user info
  // make sure to do so only after passing the authValidation middleware
  //   eg: console.log(req.user) gives the user info
  res.status(200).json([
    {
      name: "asdds",
      price: 124412,
    },
    {
      name: "tv",
      price: 243,
    },
  ]);
});

export default test_router;
