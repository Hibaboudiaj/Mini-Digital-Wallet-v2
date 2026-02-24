const express = require("express");
const userRoutes = require("./routes/userRoutes");
// const walletRoutes = require("./routes/walletRoutes");

const app = express();

// app.use("/users", userRoutes);
// app.use("/wallets", walletRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "success",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
