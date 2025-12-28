import {
  getStudentProfile,
  updateStudentProfile,
  getDashboardData,
} from './student.service.js'

export const getProfile = async (req, res) => {
  try {
    const student = await getStudentProfile(req.student._id)
    res.json(student)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProfile = async (req, res) => {
  try {
    const data = {
      ...req.body,
    }

    // image upload handle (if exists)
    if (req.file) {
      data.image = `/uploads/profiles/${req.file.filename}`
    }

    const student = await updateStudentProfile(req.student._id, data)
    res.json(student)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const dashboard = async (req, res) => {
  try {
    const data = await getDashboardData(req.student)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
