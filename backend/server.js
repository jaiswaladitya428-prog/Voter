require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const aiRoutes = require("./routes/ai");
const electionRoutes = require("./routes/election");

app.use("/api/ai", aiRoutes);
app.use("/api/election", electionRoutes);

app.get("/", (req, res) => {
  res.send("Election Assistant API is running!");
});

// Mock MongoDB connection for now so it doesn't crash without a URL
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
} else {
  console.log("No MONGO_URI found, skipping DB connection");
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
