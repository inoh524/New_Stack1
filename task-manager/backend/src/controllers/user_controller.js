const user_service = require("../services/user_service");

// Create
exports.create_user = async (req, res) => {
  try {
    const user = await user_service.create_user(req.body);

    res.status(201).json(user);
  } catch (err) {
  console.error(err);   // <-- Add this

  res.status(500).json({
    error: err.message,
  });
}
};

// Read All
exports.get_users = async (req, res) => {
  try {
    const users = await user_service.get_users();

    res.json(users);
  } catch (err) {
  console.error(err);   // <-- Add this

  res.status(500).json({
    error: err.message,
  });
}
};

// Read One
exports.get_user_by_id = async (req, res) => {
  try {
    const user = await user_service.get_user_by_id(
      Number(req.params.id)
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
  console.error(err);   // <-- Add this

  res.status(500).json({
    error: err.message,
  });
}
};

// Update
exports.update_user = async (req, res) => {
  try {
    const user = await user_service.update_user(
      Number(req.params.id),
      req.body
    );

    res.json(user);
  } catch (err) {
  console.error(err);   // <-- Add this

  res.status(500).json({
    error: err.message,
  });
}
};

// Delete
exports.delete_user = async (req, res) => {
  try {
    await user_service.delete_user(Number(req.params.id));

    res.json({
      message: "User deleted successfully",
    });
  } catch (err) {
  console.error(err);   // <-- Add this

  res.status(500).json({
    error: err.message,
  });
}
};

