import authRoutes from './auth.routes.js'

const authModule = (app) => {
  app.use('/api/auth', authRoutes)
}

export default authModule
