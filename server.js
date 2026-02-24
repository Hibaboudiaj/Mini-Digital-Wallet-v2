const express = require("express");
const userRoutes = require("./routes/userRoutes");
const walletRoutes = require("./routes/walletRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

// app.use("/users", userRoutes);
// app.use("/wallets", walletRoutes);

// app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.json({
    status: "success",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
