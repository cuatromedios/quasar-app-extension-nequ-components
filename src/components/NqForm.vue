<template>
  <q-form v-bind="$attrs"
          v-on="$listeners"
          :disabled="!ready || saving"
  >
    <div v-if="ready" class="row q-col-gutter-lg">
      <slot name="default"></slot>
      <div class="flex flex-center col-12">
        <q-btn label="Cancel" size="md" color="primary" flat class="q-mr-lg" @click="onCancel" />
        <q-btn :label="submitLabel" size="lg" push type="submit" color="primary" :loading="saving"/>
      </div>
    </div>
    <div v-if="!ready" class="row col-12">
      <q-skeleton class="col-12 q-mb-md" type="QInput" height="48px"  />
      <q-skeleton class="col-12 q-mb-md" type="QInput" height="48px"  />
      <q-skeleton class="offset-4 col-2 q-mr-md" type="QBtn" height="48px"  />
      <q-skeleton class="col-2" type="QBtn" height="48px"  />
    </div>
  </q-form>
</template>

<script>
  import {field} from '../mixins/field'

  export default {
    name: 'NqForm',
    mixins: [ field ],
    props: {
      submitLabel: {
        type: String,
        default: 'Submit'
      },
      ready: {
        type: Boolean,
        default: true
      },
      saving: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {}
    },
    methods: {
      onCancel() {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss">
</style>
