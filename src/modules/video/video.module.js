import videoRoutes from './video.route.js'

const videoModule = (app) => {
  app.use('/api/videos', videoRoutes)
}

export default videoModule
