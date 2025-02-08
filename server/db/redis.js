import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URI)

redis.on('connect', () => {
  console.log('✅ Redis connected successfully!')
})

redis.on('error', (error) => {
  console.log('❌ Redis connection error:', error)
})

export { redis }
