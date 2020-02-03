<template>
  <nq-input class="nq-currency"
            input-class="text-right text-h6"
            v-bind="$attrs"
            v-on="$listeners">
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </nq-input>
</template>

<script>
  export default {
    name: 'NqInputNumber',
    props: {}
  }
</script>
