// controllers/walletController.js

const { users, wallets } = require("../data/data");

// CREATE WALLET
exports.createWallet = (req, res) => {
  const { user_id, name } = req.body;

  const user = users.find((u) => u.id === user_id);

  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  const newWallet = {
    id: wallets.length + 1,
    user_id,
    name,
    sold: 0,
  };

  wallets.push(newWallet);

  res.status(201).json(newWallet);
};

// GET ALL WALLETS
exports.getWallets = (req, res) => {
  res.status(200).json(wallets);
};

// GET WALLET BY ID
exports.getWalletById = (req, res) => {
  const id = parseInt(req.params.id);

  const wallet = wallets.find((w) => w.id === id);

  if (!wallet) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  res.status(200).json(wallet);
};

// UPDATE WALLET
exports.updateWallet = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  const wallet = wallets.find((w) => w.id === id);

  if (!wallet) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  wallet.name = name || wallet.name;

  res.status(200).json(wallet);
};

// DELETE WALLET
exports.deleteWallet = (req, res) => {
  const id = parseInt(req.params.id);

  const index = wallets.findIndex((w) => w.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  wallets.splice(index, 1);

  res.status(200).json({ message: "Wallet deleted" });
};

// DEPOSIT
exports.deposit = (req, res) => {
  const id = parseInt(req.params.id);
  const { amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Amount must be positive" });
  }

  const wallet = wallets.find((w) => w.id === id);

  if (!wallet) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  wallet.sold += amount;

  res.status(200).json(wallet);
};

// WITHDRAW
exports.withdraw = (req, res) => {
  const id = parseInt(req.params.id);
  const { amount } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ message: "Amount must be positive" });
  }

  const wallet = wallets.find((w) => w.id === id);

  if (!wallet) {
    return res.status(404).json({ message: "Wallet not found" });
  }

  if (wallet.sold < amount) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  wallet.sold -= amount;

  res.status(200).json(wallet);
};