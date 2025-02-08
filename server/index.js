import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import { pgPool } from './db/postgres.js'
import { connectMongo } from './db/mongo.js'
import { redis } from './db/redis.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.get('/', async (req, res) => {
  try {
    await connectMongo()
    const result = await pgPool.query('SELECT NOW()')
    console.log(result.rows[0])
    return res.send({ msg: 'Server is running!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Internal Server Error' })
  }
})

// Server setup
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`)
})
