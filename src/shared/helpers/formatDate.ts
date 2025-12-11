const intl = new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: 'long',
})

export const formatDate = (date: Date) => {
  const targetDate = new Date(date)
  const today = new Date()

  const zeroTarget = new Date(targetDate)
  zeroTarget.setHours(0, 0, 0, 0)

  const zeroToday = new Date(today)
  today.setHours(0, 0, 0, 0)

  const diffTime = zeroTarget.getTime() - zeroToday.getTime()
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'

  if (diffDays === 1) {
    const hours = targetDate.getHours()

    if (hours >= 4 && hours < 12) {
      return 'Tomorrow morning'
    } else if (hours >= 17 && hours <= 23) {
      return 'Tomorrow evening'
    } else {
      return 'Tomorrow'
    }
  }

  if (diffDays === 2) return 'In 2 days'

  return intl.format(date)
}
