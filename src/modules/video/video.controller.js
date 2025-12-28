import Video from './video.model.js'
import { getEmbedUrl } from './video.helper.js'

export const createVideo = async (req, res) => {
  const { title, description, youtubeUrl, thumbnail } = req.body

  if (!title || !youtubeUrl) {
    return res.status(400).json({ message: 'Title & YouTube URL required' })
  }

  const embedUrl = getEmbedUrl(youtubeUrl)

  const video = await Video.create({
    title,
    description,
    youtubeUrl,
    embedUrl,
    thumbnail,
  })

  res.status(201).json({
    message: 'Video created successfully',
    video,
  })
}

export const getAllVideos = async (req, res) => {
  const videos = await Video.find({ isActive: true })
    .select('title embedUrl thumbnail')
    .sort({ createdAt: -1 })

  res.json(videos)
}

export const getVideoById = async (req, res) => {
  const video = await Video.findById(req.params.id)

  if (!video) {
    return res.status(404).json({ message: 'Video not found' })
  }

  res.json({
    title: video.title,
    embedUrl: video.embedUrl,
    description: video.description,
  })
}
