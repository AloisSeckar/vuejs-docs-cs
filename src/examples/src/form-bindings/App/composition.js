import { ref } from 'vue'

export default {
  setup() {
    const text = ref('Změnit')
    const checked = ref(true)
    const checkedNames = ref(['Jan'])
    const picked = ref('Jedna')
    const selected = ref('A')
    const multiSelected = ref(['A'])

    return {
      text,
      checked,
      checkedNames,
      picked,
      selected,
      multiSelected
    }
  }
}
