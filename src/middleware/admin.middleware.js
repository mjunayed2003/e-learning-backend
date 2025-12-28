const adminMiddleware = (req, res, next) => {
  if (req.student.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only access' })
  }
  next()
}

export default adminMiddleware
