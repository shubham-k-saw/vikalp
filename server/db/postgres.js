import dotenv from 'dotenv'
import pkg from 'pg'

dotenv.config()
const { Pool } = pkg

const pgPool = new Pool({
  connectionString: process.env.POSTGRES_URI,
  max: 10, // Set max connections in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 sec
  connectionTimeoutMillis: 2000, // Return error if connection takes >2 sec
})

pgPool.on('connect', () => {
  console.log('✅ Postgres connected successfully!')
})

pgPool.on('error', (error) => {
  console.log('❌ Postgres connection error:', error)
  process.exit(1) // Exit to prevent hanging
})

export { pgPool }
