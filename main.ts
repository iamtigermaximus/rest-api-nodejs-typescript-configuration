import express from 'express'
import userRouter from './routes/user'

// app setup
const PORT = 3001
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// health check route
app.get('/health-check', async (req, res, next) => {
  res.status(200).send('The API service works fine!')
})

// routes
app.use('/users', userRouter)

// server
app.listen(PORT, () => {
  console.log(`API Server running at port ${PORT}`)
})

// log unhandled rejections
process.on('unhandledRejection', (err) => {
  console.log(err)
  // process.exit(1);
})
