// index.js
console.log("✅ AutoDrop backend działa!");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("AutoDrop backend działa 🐙");
});

// 👉 Nowy endpoint /ping
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
