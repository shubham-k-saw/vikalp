import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ MongoDB connected successfully!')
  } catch (error) {
    console.log('❌ MongoDB connection error:', error)
    throw error
  }
}

export { connectMongo }
