import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RatingStarsProps {
  rating: number
  totalStars?: number
  size?: number
  fillColor?: string
  emptyColor?: string
  className?: string
}

export const RatingStars = ({
  rating,
  totalStars = 5,
  size = 20,
  fillColor = 'text-yellow-500',
  emptyColor = 'text-gray-300',
  className,
}: RatingStarsProps) => {
  const clampedRating = Math.max(0, Math.min(rating, totalStars))

  return (
    <div className={cn('flex items-center', className)}>
      {Array.from({ length: totalStars }).map((_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= clampedRating

        return (
          <Star
            key={index}
            size={size}
            className={cn(isFilled ? fillColor : emptyColor)}
            fill={isFilled ? 'currentColor' : 'none'}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}
