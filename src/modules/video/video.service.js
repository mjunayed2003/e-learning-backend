import Video from './video.model.js'
import { getEmbedUrl } from './video.helper.js'

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
