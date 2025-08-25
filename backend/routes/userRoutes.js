const express = require("express")

const {
  updateProfile,
  deleteResume,
  getPublicProfile,
} = require("../controllers/userController")
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router()

//Protected Routes
router.put("/profile", protect, updateProfile)
router.delete("/profile", protect, deleteResume)

//Public Route

router.get("/:id", getPublicProfile)

module.exports = router
