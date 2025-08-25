const Application = require("../models/Application")
const Job = require("../models/Job")

//@desc apply to a job

exports.applyToJob = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//@desc Get Logged in User's Applications
exports.getMyApplications = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//@desc Get all Applicants for a job Employer

exports.getApplicantsForJob = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//@desc Get Application By ID ( Jobseeker or Employer)
exports.getApplicationById = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

//@desc Update Application Status ( Employer)
exports.updateStatus = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
