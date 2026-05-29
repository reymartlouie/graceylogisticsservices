import { useEffect, useRef, type ReactNode } from 'react'

type AnimationType =
  | 'scroll-animate'
  | 'scroll-animate-left'
  | 'scroll-animate-right'
  | 'scroll-animate-scale'

interface AnimateInProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  threshold?: number
  className?: string
}

export default function AnimateIn({
  children,
  animation = 'scroll-animate',
  delay = 0,
  threshold = 0.15,
  className = '',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={[animation, className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
