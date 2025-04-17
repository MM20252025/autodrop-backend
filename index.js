const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("AutoDrop backend działa 💡");
});

app.get("/ping", (req, res) => {
  res.json({ pong: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
