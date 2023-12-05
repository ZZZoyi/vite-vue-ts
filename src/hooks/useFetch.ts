import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url: string) {
  const data = ref(null)
  const error = ref(null)
  watchEffect(() => {
    data.value = null
    error.value = null
    fetch(toValue(url))
      .then(res => res.json())
      .then(json => data.value = json)
      .catch(err => error.value = err)
  })
  return {data, error}
}