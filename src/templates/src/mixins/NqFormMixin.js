/**
 * Use this mixin to create forms quickly.
 *
 * The mixin already defines these data properties:
 * @mixin loading Boolean The page is loading initial data from Api, by default true, waits for calls to be done
 * @mixin submiting Boolean The page is saving the form, you can use this param to set sending state to buttons
 *
 */
export const NqFormMixin = {
  data () {
    return {
      loading: false,
      submitting: false,
      form: {},
      submitEndpoint: {}
    }
  },
  async mounted () {
  },
  methods: {
    async loadEndpoints (endpoints) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    async onSubmit () {
      this.submitting = true
      // Submit
      this.submitting = false
    },
    async onCancel () {
    }
  }
}
