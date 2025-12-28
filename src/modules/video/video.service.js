import Video from './video.model.js'

export const createVideo = async (data) => {
  return await Video.create(data)
}

export const getAllVideos = async () => {
  return await Video.find().sort({ createdAt: -1 })
}

export const getVideoById = async (id) => {
  return await Video.findById(id)
}
