const express = require("express");
const path = require("path");
const photosRouter = require("./routers/photos");
require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.json());
app.use(path);
app.use(photosRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
