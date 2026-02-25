const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/wallets", walletRoutes);

// Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});