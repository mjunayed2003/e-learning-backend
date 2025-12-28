import express from 'express'
import authMiddleware from '../../middleware/auth.middleware.js'
import adminMiddleware from '../../middleware/admin.middleware.js'
import {
  createVideo,
  getAllVideos,
  getVideoById,
} from './video.controller.js'

const router = express.Router()

router.post('/create', authMiddleware, adminMiddleware, createVideo)
router.get('/', authMiddleware, getAllVideos)
router.get('/:id', authMiddleware, getVideoById)

export default router
