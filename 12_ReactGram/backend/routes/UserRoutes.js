const express = require("express")
const router = express.Router()


// Controller
const { register } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/useValidations")

// Routes
router.post("/register", userCreateValidation(), validate, register);

// Export
module.exports = router;