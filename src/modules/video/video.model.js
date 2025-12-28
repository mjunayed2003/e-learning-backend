import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: String,

    youtubeUrl: {
      type: String,
      required: true,
    },

    embedUrl: {
      type: String,
      required: true,
    },

    thumbnail: String,

    category: {
      type: String,
      required: true,
      index: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
)

// 🔍 Title search index
videoSchema.index({ title: 'text' })

export default mongoose.model('Video', videoSchema)
