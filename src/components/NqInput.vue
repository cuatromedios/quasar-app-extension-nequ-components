<template>
  <q-input v-bind="$attrs"
           v-on="$listeners"
           v-on:focus="onFocus"
           v-on:blur="onBlur"
           :outlined="!filled && !standout && !borderless"
           class="nq-input"
           :input-class="`${$attrs['input-class'] || ''} nq-input-field`"
           >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </q-input>
</template>

<script>
  import {field} from '../mixins/field'

  export default {
    name: 'NqInput',
    mixins: [ field ],
    props: {
      filled:Boolean,
      standout:Boolean,
      borderless:Boolean
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  .nq-input-field {
    font-size: 1.33em;
    font-family: 'Fira Mono', monospace, Monospaced;
    letter-spacing: -0.05em;
  }
</style>
