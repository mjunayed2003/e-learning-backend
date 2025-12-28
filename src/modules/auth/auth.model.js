import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    image: String,

    role: {
      type: String,
      enum: ['student', 'admin'],
      default: 'student',
    },
  },
  { timestamps: true }
)

export default mongoose.model('Student', studentSchema)
