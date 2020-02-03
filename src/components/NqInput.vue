<template>
  <q-input :outlined="!filled && !standout && !borderless"
           class="nq-input"
           v-bind="$attrs"
           v-on="$listeners">
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
