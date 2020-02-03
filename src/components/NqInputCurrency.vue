<template>
  <nq-input-number class="nq-currency" input-class="text-right text-h6">
    <template v-slot:prepend>
      {{ symbol }}
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
      }
    }
  }
</script>
