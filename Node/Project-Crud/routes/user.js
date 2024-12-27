const express = require("express");
const router = express.Router();

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleAddNewUser,
  handledeleteUserById,
} = require("../controllers/user.js");

router.get("/", handleGetAllUsers);
router.post("/", handleAddNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .delete(handledeleteUserById)
  .patch(handleUpdateUserById);

module.exports = router;
