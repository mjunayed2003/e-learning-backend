import express from 'express'
import cors from 'cors'

import authModule from './modules/auth/auth.module.js'
import studentModule from './modules/student/student.module.js'
import videoModule from './modules/video/video.module.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/uploads', express.static('src/uploads'))

authModule(app)
studentModule(app)
videoModule(app)

export default app
