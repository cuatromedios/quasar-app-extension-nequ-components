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
    },
    async onBlur(endpoint, payload, form) {
      this.focused = false
    }
  }
}
