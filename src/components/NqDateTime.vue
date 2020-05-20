<template>
  <nq-input v-bind:value="dateFormatted"
            v-on:focus="onFocus"
            v-on:blur="onBlur"
            v-bind="$attrs"
            class="nq-date-time"
            ref="nqInputElement"
            @click="onFieldClick"
            @clear="onClear"
            :input-class="`${$attrs['input-class'] || ''}`"
  >
    <template v-slot:prepend>
      <q-btn :icon="dateIcon" flat round class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="modelBind" :mask="internalMask" @input="() => $refs.qDateProxy.hide()" today-btn />
        </q-popup-proxy>
      </q-btn>
    </template>
    <template v-slot:append v-if="noTime===false">
      <q-btn :icon="timeIcon" flat round class="cursor-pointer">
        <q-popup-proxy ref="qTimeProxy" transition-show="scale" transition-hide="scale">
          <q-time v-model="modelBind" :mask="internalMask" @input="() => $refs.qTimeProxy.hide()" format24h now-btn />
        </q-popup-proxy>
      </q-btn>
    </template>
  </nq-input>
</template>

<script>
  import moment from 'moment'
  import {nqFieldMixin} from '../templates/src/mixins/NqFieldMixin'
  export default {
    name: 'NqDateTime',
    mixins: [ nqFieldMixin ],
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      modelFormat: {
        type: String,
        required: false,
        default: 'YYYY-MM-DDTHH:mm:ssZ'
      },
      displayFormat: {
        type: String,
        required: false,
        default: 'MMMM Do YYYY, kk:mm'
      },
      dateIcon: {
        type: String,
        default: 'event'
      },
      timeIcon: {
        type: String,
        default: 'access_time'
      },
      noTime: {
        type: Boolean,
        default: false
      },
      nullText: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        dateFormatted: '',
        dateModel: null,
        dateValue: null,
        internalMask: 'YYYY-MM-DDTHH:mm:ssZ',
        clearing: false
      }
    },
    mounted() {
      this.processDate(this.value)
    },
    methods: {
      processDate (newValue, emit=false) {
        if (newValue !== null) {
          this.dateValue = moment(newValue)
          this.dateModel = this.dateValue.format(this.modelFormat)
          this.dateFormatted = this.dateValue.format(this.displayFormat)
        } else {
          this.dateValue = null
          this.dateModel = null
          this.dateFormatted = this.nullText
        }
        if (emit) {
          this.$emit('input', this.dateModel)
        }
      },
      onFieldClick (event) {
        if (!this.clearing) this.$refs.qDateProxy.show()
      },
      onClear () {
        this.clearing = true
        this.$emit('input', null)
        setTimeout(() => {
          this.clearing = false
        }, 100)
      }
    },
    computed: {
      modelBind: {
        get () {
          let toRetrun = this.dateValue ? this.dateValue.format(this.internalMask) : null
          return toRetrun
        },
        set (newValue) {
          this.processDate(newValue, true)
        }
      },
      timeZone () {
        return this.dateValue ? this.dateValue.format('Z') : ''
      }
    },
    watch: {
      value (newValue) {
        if (newValue === this.dateModel) return
        this.processDate(newValue, true)
      }
    }
  }
</script>
