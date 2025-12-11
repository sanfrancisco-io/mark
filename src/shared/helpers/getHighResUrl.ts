export const getHighResUrl = (url: string) => {
  if (!url) return ''
  return url.replace(/\/\d+\/\d+$/, '/1000/1000')
}