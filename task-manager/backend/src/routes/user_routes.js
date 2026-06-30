const express = require("express");

const router = express.Router();

const user_controller = require("../controllers/user_controller");

router.get("/", user_controller.get_users);

router.get("/:id", user_controller.get_user_by_id);

router.post("/", user_controller.create_user);

router.put("/:id", user_controller.update_user);

router.delete("/:id", user_controller.delete_user);

module.exports = router;