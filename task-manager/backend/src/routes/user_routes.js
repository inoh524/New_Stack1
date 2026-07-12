const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user_controller");
const authMiddleware = require("../middleware/auth_middleware");
const { admin_only } = require("../middleware/admin_middleware");

// public routes
router.post("/", user_controller.create_user);

// private routes

// logged-in user can see own account only
router.get("/me", authMiddleware, user_controller.get_me);

// admin can see all users
router.get("/", authMiddleware, admin_only, user_controller.get_users);

// admin can see specific user
router.get("/:id", authMiddleware, admin_only, user_controller.get_user_by_id);

// logged-in user can update own account only
router.put("/me", authMiddleware, user_controller.update_me);

// admin can update any user
router.put("/:id", authMiddleware, admin_only, user_controller.update_user);

// admin can delete user
router.delete("/:id", authMiddleware, admin_only, user_controller.delete_user);

module.exports = router;