export const getEmbedUrl = (url) => {
  if (url.includes('youtu.be')) {
    const id = url.split('youtu.be/')[1]
    return `https://www.youtube.com/embed/${id}`
  }

  const id = url.split('v=')[1]
  return `https://www.youtube.com/embed/${id}`
}
