<template>
  <q-form v-bind="$attrs"
          v-on="$listeners"
          greedy
          :disabled="!ready || submitting"
  >
    <q-card>
      <q-card-section>
          <div v-if="ready" class="row q-col-gutter-y-sm q-col-gutter-x-lg">
            <slot name="default"></slot>
          </div>
          <div v-if="!ready" class="row col-12">
            <q-skeleton class="col-12 q-mb-md" type="QInput" height="48px"  />
            <q-skeleton class="col-12 q-mb-md" type="QInput" height="48px"  />
            <q-skeleton class="offset-4 col-2 q-mr-md" type="QBtn" height="48px"  />
            <q-skeleton class="col-2" type="QBtn" height="48px"  />
          </div>
      </q-card-section>
      <q-separator v-if="!noActions" />
      <q-card-actions class="q-pa-md bg-grey-2" v-if="!noActions" >
        <div class="flex flex-center col-12">
          <q-btn v-if="cancelLabel !== ''" :label="cancelLabel" size="md" color="primary" flat class="q-mr-lg" @click="onCancel" />
          <q-btn :label="submitLabel" size="lg" push type="submit" color="primary" :loading="submitting"/>
        </div>
      </q-card-actions>
    </q-card>
  </q-form>
</template>

<script>
  export default {
    name: 'NqForm',
    props: {
      submitLabel: {
        type: String,
        default: 'Submit'
      },
      cancelLabel: {
        type: String,
        default: 'Cancel'
      },
      noActions: {
        type: Boolean,
        default: false
      },
      ready: {
        type: Boolean,
        default: true
      },
      submitting: {
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
