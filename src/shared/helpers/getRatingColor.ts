export const getRatingColor = (rating: number) => {
  if (rating < 2) return '#FA6868'
  if (rating < 3) return '#F79A19'
  return '#A3D78A'
}
