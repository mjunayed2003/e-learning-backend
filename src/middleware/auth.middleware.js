import jwt from 'jsonwebtoken'
import Student from '../modules/auth/auth.model.js'

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const student = await Student.findById(decoded.id).select('-password')

    if (!student) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    req.student = student
    next()
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export default authMiddleware
