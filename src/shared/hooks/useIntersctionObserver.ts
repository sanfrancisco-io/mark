import { useEffect, useRef } from 'react'

export const useIntersectionObserver = (
  callback: () => void,
  dependencies: any[] = [],
) => {
  const observerTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = observerTarget.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0]
        if (firstEntry.isIntersecting) {
          callback()
        }
      },
      {
        threshold: 1.0,
        rootMargin: '100px',
      },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [observerTarget, ...dependencies])

  return observerTarget
}
