import express from 'express'
import authMiddleware from '../../middleware/auth.middleware.js'
import upload from '../../middleware/upload.middleware.js'
import {
  getProfile,
  updateProfile,
  dashboard,
} from './student.controller.js'

const router = express.Router()

router.get('/profile', authMiddleware, getProfile)

router.put(
  '/profile',
  authMiddleware,
  upload.single('image'),
  updateProfile
)

router.get('/dashboard', authMiddleware, dashboard)

export default router
