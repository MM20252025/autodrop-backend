// index.js (autodrop-backend)

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// 🔑 Włączamy CORS dla wszystkich domen
app.use(cors({ origin: "*" }));

// (na przyszłość) parsowanie JSON
app.use(express.json());

// 📦 Mockowane dane produktów
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Zegarek Sportowy", price: 149.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Słuchawki Bluetooth", price: 89.90,   image: "https://via.placeholder.com/150" },
    { id: 3, name: "Kamera IP Wi‑Fi",    price: 129.50,  image: "https://via.placeholder.com/150" },
  ]);
});

// 🚀 Start serwera
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

