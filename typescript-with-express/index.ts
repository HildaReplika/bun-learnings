const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();

const app = express();
const port = 6000;

app.get("/hello", (req: any, res: any) => {
  res.send("Im here");
});
app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
