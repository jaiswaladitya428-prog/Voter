const express = require("express");
const router = express.Router();

// Mock election data
const electionData = {
  process: [
    "Election announcement",
    "Candidate nomination",
    "Campaigning",
    "Voting day",
    "Vote counting",
    "Result declaration"
  ],
  documents: [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Driving License",
    "Utility Bills"
  ]
};

router.get("/info", (req, res) => {
  res.json(electionData);
});

module.exports = router;
