import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to trigger animations when elements enter the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.Ref, boolean]} - ref to attach & visibility state
 */
export function useReveal(options = {}) {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, ...options }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return [ref, isVisible]
}
