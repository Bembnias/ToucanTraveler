import mongoose from 'mongoose'
import _colors from 'colors'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/toucandb')
    console.log('Connected to MongoDB successfully'.green)
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`.red)
  }
}

export default connectDB
