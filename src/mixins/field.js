/**
 * Base mixin for field components.
 */
export const field = {
  data () {
    return {
      focused: false
    }
  },
  async mounted () {
  },
  methods: {
    async onFocus() {
      this.focused = true
      console.log('focus')
    },
    async onBlur(endpoint, payload, form) {
      this.focused = false
    }
  }
}
