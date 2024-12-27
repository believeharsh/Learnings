const userMongo = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  try {
    const allDbusers = await userMongo.find({});
    return res.json(allDbusers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to retrieve users", details: error.message });
  }
};

const handleGetUserById = async (req, res) => {
  const user = await userMongo.findById(req.params.id);
  if (!user) res.status(400).json({ err: "user not found" });
  return res.json(user);
};

const handledeleteUserById = async (req, res) => {
  const user = await userMongo.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // find user by id and update
    const user = await userMongo.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!user) return res.status(404).json({ err: "user not found" });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ err: "an error occured", details: error.message });
  }
};

const handleAddNewUser = async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.email) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const result = await userMongo.create({
    name: body.name,
    email: body.email,
  });
  return res.status(201).json({ message: "new user Created" });
};

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleAddNewUser,
  handledeleteUserById
};
