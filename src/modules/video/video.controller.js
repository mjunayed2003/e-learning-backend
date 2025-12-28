import Video from './video.model.js'
import { getEmbedUrl } from './video.helper.js'

// Create video (Admin)
export const createVideo = async (req, res) => {
  const { title, description, youtubeUrl, thumbnail, category } = req.body

  if (!title || !youtubeUrl || !category) {
    return res.status(400).json({
      message: 'Title, YouTube URL & Category required',
    })
  }

  const embedUrl = getEmbedUrl(youtubeUrl)

  const video = await Video.create({
    title,
    description,
    youtubeUrl,
    embedUrl,
    thumbnail,
    category,
  })

  res.status(201).json({
    message: 'Video created successfully',
    video,
  })
}

// Get all videos (category + search)
export const getAllVideos = async (req, res) => {
  const { category, search } = req.query

  const filter = { isActive: true }

if (category) {
  filter.category = new RegExp(`^${category}$`, 'i')
}
  if (search) {
    filter.$text = { $search: search }
  }

  const videos = await Video.find(filter)
    .select('title embedUrl thumbnail category views')
    .sort({ createdAt: -1 })

  res.json(videos)
}

// Get popular videos
export const getPopularVideos = async (req, res) => {
  const videos = await Video.find({ isActive: true })
    .sort({ views: -1 })
    .limit(10)
    .select('title embedUrl thumbnail views category')

  res.json(videos)
}

// Get single video + view count
export const getVideoById = async (req, res) => {
  const video = await Video.findByIdAndUpdate(
    req.params.id,
    { $inc: { views: 1 } },
    { new: true }
  )

  if (!video) {
    return res.status(404).json({ message: 'Video not found' })
  }

  res.json({
    title: video.title,
    embedUrl: video.embedUrl,
    description: video.description,
    category: video.category,
    views: video.views,
  })
}
