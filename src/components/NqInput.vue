<template>
  <q-input v-bind="$attrs"
           v-on="$listeners"
           v-on:focus="onFocus"
           v-on:blur="onBlur"
           :outlined="!filled && !standout && !borderless"
           class="nq-input nq-component"
           :input-class="`${$attrs['input-class'] || ''} nq-input-field`"
           >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </q-input>
</template>

<script>
  import {nqFieldMixin} from '../templates/src/mixins/NqFieldMixin'

  export default {
    name: 'NqInput',
    mixins: [ nqFieldMixin ],
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
