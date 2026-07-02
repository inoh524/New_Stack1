const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");
const authMiddleware = require("../middleware/auth_middleware");

// public routes
router.post("/", user_controller.create_user);
// router.post("/login", user_controller.login_user);

// private routes
router.get("/", authMiddleware, user_controller.get_users);
router.get("/:id", authMiddleware, user_controller.get_user_by_id);
router.put("/:id", authMiddleware, user_controller.update_user);
router.delete("/:id", authMiddleware, user_controller.delete_user);
module.exports = router;