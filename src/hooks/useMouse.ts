import { reactive, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const point = reactive({ x: 0, y: 0 })
  const updatePoint = (e: MouseEvent) => {
    point.x = e.pageX
    point.y = e.pageY
  }
  onMounted(() => window.addEventListener('mousemove', updatePoint))
  onUnmounted(() => window.removeEventListener('mousemove', updatePoint))

  return point
}