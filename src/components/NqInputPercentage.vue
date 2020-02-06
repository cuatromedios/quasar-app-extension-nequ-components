<template>
  <nq-input-number v-bind:value="formattedValue"
                   v-on:input="onInput"
                   v-on:change="onChange"
                   v-on:focus="onFocus"
                   v-on:blur="onBlur"
                   :pattern="pattern"
                   class="nq-input-percentage">
    <template v-slot:append>%</template>
  </nq-input-number>
</template>

<script>
  import numeral from 'numeral'
  import {nqFieldMixin} from '../templates/src/mixins/NqFieldMixin'
  export default {
    name: 'NqInputPercentage',
    mixins: [ nqFieldMixin ],
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      pattern: {
        type: String,
        default: '0,0'
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
    computed: {
      decimals () {
        return this.pattern.indexOf('.') === -1 ? 0 : this.pattern.split('.')[1].length
      },
      digits () {
        return String(this.value).split('.')[0].length
      }
    },
    methods: {
      onInput (entered) {
        let value = (numeral(entered).value() / 100)
        this.formattedValue = entered
        this.$emit('input', value)
      },
      onChange () {
        this.formattedValue = this.format(this.value)
        this.$emit('input', this.value.toPrecision(this.digits + this.decimals))
      },
      format (value) {
        return numeral(value * 100).format(this.pattern)
      }
    },
    watch: {
      value (newValue) {
        if (!this.focused) this.formattedValue = this.format(newValue)
      }
    }
  }
</script>
<style lang="scss">
  .nq-input-percentage .q-field__append {
    color: $grey-7;
    font-size: $body-font-size * 1.5;
    line-height: 100%;
  }
</style>
