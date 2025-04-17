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
app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Zegarek Sportowy",
      price: 149.99,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Słuchawki Bluetooth",
      price: 89.90,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Kamera IP Wi-Fi",
      price: 129.50,
      image: "https://via.placeholder.com/150"
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ AutoDrop backend działa!");
  console.log(`Server is running on port ${PORT}`);
});
 