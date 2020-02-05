<template>
  <nq-input-number v-bind="$attrs"
                   v-on="$listeners"
                   :pattern="pattern"
                   :prefix="`${symbol} `"
                   class="nq-input-currency">
    <template v-slot:append>
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
