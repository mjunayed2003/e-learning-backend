import studentRoutes from './student.route.js'

const studentModule = (app) => {
  app.use('/api/student', studentRoutes)
}

export default studentModule
