<template>
  <q-select v-bind="$attrs"
            v-on="$listeners"
            :outlined="!filled && !standout && !borderless"
            class="nq-select nq-component"
            :input-class="`${$attrs['input-class'] || ''} nq-select-field`"
           >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </q-select>
</template>

<script>
  import {field} from '../mixins/field'

  export default {
    name: 'NqSelect',
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
