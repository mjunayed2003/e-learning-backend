import bcrypt from 'bcrypt'
import Student from './auth.model.js'
import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  })
}

export const registerStudent = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error('All fields are required')
  }

  const exists = await Student.findOne({ email })
  if (exists) {
    throw new Error('Email already registered')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const student = await Student.create({
    name,
    email,
    password: hashedPassword,
  })

  return {
    token: generateToken(student._id),
    student: {
      id: student._id,
      name: student.name,
      email: student.email,
    },
  }
}

export const loginStudent = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Email and password required')
  }

  const student = await Student.findOne({ email })
  if (!student) {
    throw new Error('Invalid credentials')
  }

  const match = await bcrypt.compare(password, student.password)
  if (!match) {
    throw new Error('Invalid credentials')
  }

  return {
    token: generateToken(student._id),
    student: {
      id: student._id,
      name: student.name,
      email: student.email,
    },
  }
}
