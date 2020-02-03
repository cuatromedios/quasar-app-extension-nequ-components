<template>
  <q-input :outlined="!filled && !standout && !borderless"
           class="nq-input"
           v-bind="$attrs"
           v-on="$listeners">
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </q-input>
</template>

<script>
  export default {
    name: 'NqInput',
    props: {
      filled:Boolean,
      standout:Boolean,
      borderless:Boolean
    }
  }
</script>
