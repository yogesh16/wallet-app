import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for handling touch swipe gestures
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Minimum distance in pixels to register as a swipe (default: 50)
 * @param {Function} options.onSwipeLeft - Callback for left swipe
 * @param {Function} options.onSwipeRight - Callback for right swipe
 */
export function useSwipe(elementRef, options = {}) {
  const {
    threshold = 50,
    onSwipeLeft = () => {},
    onSwipeRight = () => {},
  } = options

  const touchStartX = ref(0)
  const touchEndX = ref(0)
  const isSwiping = ref(false)
  const swipeDistance = ref(0)

  const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX
    touchEndX.value = e.touches[0].clientX
    isSwiping.value = true
  }

  const handleTouchMove = (e) => {
    if (!isSwiping.value) return
    touchEndX.value = e.touches[0].clientX
    swipeDistance.value = touchEndX.value - touchStartX.value
  }

  const handleTouchEnd = () => {
    if (!isSwiping.value) return
    
    const distance = touchEndX.value - touchStartX.value
    
    if (Math.abs(distance) >= threshold) {
      if (distance > 0) {
        onSwipeRight()
      } else {
        onSwipeLeft()
      }
    }
    
    isSwiping.value = false
    swipeDistance.value = 0
  }

  onMounted(() => {
    const element = elementRef.value
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true })
      element.addEventListener('touchmove', handleTouchMove, { passive: true })
      element.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
  })

  onUnmounted(() => {
    const element = elementRef.value
    if (element) {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  })

  return {
    isSwiping,
    swipeDistance,
  }
}

export default useSwipe
