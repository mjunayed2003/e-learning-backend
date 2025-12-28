export const getEmbedUrl = (youtubeUrl) => {
  const videoId = youtubeUrl.split('v=')[1]
  return `https://www.youtube.com/embed/${videoId}`
}
