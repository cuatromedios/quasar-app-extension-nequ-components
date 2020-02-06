<template>
  <nq-input v-bind:value="formattedValue"
            v-on:input="onInput"
            v-on:change="onChange"
            v-on:focus="onFocus"
            v-on:blur="onBlur"
            v-bind="$attrs"
            class="nq-input-number"
            :input-class="`${$attrs['input-class'] || ''} text-right`"
            >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </nq-input>
</template>

<script>
  import numeral from 'numeral'
  import {nqFieldMixin} from '../templates/src/mixins/NqFieldMixin'
  export default {
    name: 'NqInputNumber',
    mixins: [ nqFieldMixin ],
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      pattern: {
        type: String,
        required: false,
        default: '0,0'
      },
      before: {
        type: String,
        required: false,
        default: ''
      }
    },
    data () {
      return {
        formattedValue:''
      }
    },
    mounted() {
      this.formattedValue = this.format(this.value)
    },
    methods: {
      onInput (entered) {
        let value = numeral(entered).value()
        this.formattedValue = entered
        this.$emit('input', value)
      },
      onChange () {
        this.formattedValue = this.format(this.value)
        this.$emit('input', this.value)
      },
      format (value) {
        return this.before + numeral(value).format(this.pattern)
      }
    },
    watch: {
      value (newValue) {
        if (!this.focused) this.formattedValue = this.format(newValue)
      }
    }
  }
</script>
