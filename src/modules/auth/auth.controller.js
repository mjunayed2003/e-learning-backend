import { registerStudent, loginStudent } from './auth.service.js'

export const register = async (req, res) => {
  try {
    const data = await registerStudent(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const data = await loginStudent(req.body)
    res.json(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
