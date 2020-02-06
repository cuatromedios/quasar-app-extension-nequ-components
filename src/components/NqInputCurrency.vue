<template>
  <nq-input-number v-bind="$attrs"
                   v-on="$listeners"
                   :pattern="pattern"
                   :before="`${symbol} `"
                   class="nq-input-currency">
    <template v-slot:append v-if="currency">
      {{ currency }}
    </template>
  </nq-input-number>
</template>

<script>
  export default {
    name: 'NqInputCurrency',
    props: {
      symbol: {
        default: '$',
        type: String
      },
      currency: {
        default: '',
        type: String
      }
    },
    data () {
      return {
        pattern: '0,0.00'
      }
    }
  }
</script>

<style lang="scss">
  .nq-input-currency .q-field__append {
    color: $grey-6;
    font-size: $body-font-size * 1.25;
  }
</style>
