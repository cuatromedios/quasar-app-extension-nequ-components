<template>
  <q-field v-bind="$attrs"
           v-on="$listeners"
           v-on:focus="onFocus"
           v-on:blur="onBlur"
           :outlined="!filled && !standout && !borderless"
           class="nq-field nq-component"
           >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </q-field>
</template>

<script>
  import {field} from '../mixins/field'

  export default {
    name: 'NqField',
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
</style>
