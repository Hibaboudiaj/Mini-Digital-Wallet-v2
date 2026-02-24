const { users } = require("../data/data");

//--------------------CREATE USER---------------------//
exports.createUser = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ massege: "Tous les champs sont obligatoires" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    phone,
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

//--------------------GET USER BY ID---------------------//
exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ massege: "Utilisateur introuvable" });
  }
  res.status(200).json(user);
};

//--------------------UPDATE USER---------------------//
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, phone } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur introuvable" });
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.phone = phone || user.phone;

  res.status(200).json(user);
};

//--------------------DELETE USER---------------------//
exports.deleteUser = (req, res) => {
  const id = parent(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ massege: "Utilisateur introuvable" });
  }

  users.splice(index, 1);

  res.status(200).json({message:"Utilisateur supprimé"})
};
