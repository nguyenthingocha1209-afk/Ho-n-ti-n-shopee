const express = require("express");
const path = require("path");

const app = express();

// đọc file trong public
app.use(express.static(path.join(__dirname, "public")));

// BẮT BUỘC PHẢI CÓ ĐOẠN NÀY
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server OK"));
