require("dotenv").config()

const express = require("express")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
const jobRoutes = require("./routes/jobRoutes")
const applicationRoutes = require("./routes/applicationRoutes")

const app = express()

//Middleware to handle Cors

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

//Connect database
connectDB()

//Middleware
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/jobs", jobRoutes)
app.use("/api/applications", applicationRoutes)

//Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
