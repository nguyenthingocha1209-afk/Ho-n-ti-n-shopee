const express = require("express");
const app = express;

// cho phép đọc file trong public
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server chạy rồi");
});
