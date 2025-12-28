import Student from '../auth/auth.model.js'
import bcrypt from 'bcrypt'

export const getStudentProfile = async (studentId) => {
  return await Student.findById(studentId).select('-password')
}

export const updateStudentProfile = async (studentId, data) => {
  const updateData = {}

  if (data.name) updateData.name = data.name
  if (data.image) updateData.image = data.image

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10)
  }

  const student = await Student.findByIdAndUpdate(
    studentId,
    updateData,
    { new: true }
  ).select('-password')

  return student
}

export const getDashboardData = async (student) => {
  return {
    name: student.name,
    email: student.email,
    image: student.image,
    message: 'Welcome to Student Dashboard',
  }
}
