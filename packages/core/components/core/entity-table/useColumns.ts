import { computed } from 'vue'

export default (props) => {
  const attrs = props.entity.attrs
  const list = computed(() => {
    return attrs.map(a => a.name)
  })

  return { list }
}
