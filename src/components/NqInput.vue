<template>
  <q-input v-bind="$attrs"
           v-on="$listeners"
           v-on:focus="onFocus"
           v-on:blur="onBlur"
           lazy-rules
           :required="false"
           :outlined="!filled && !standout && !borderless"
           class="nq-input nq-component"
           :dense="size==='sm' || size==='xs' || $attrs.dense"
           :input-class="`nq-input-field ${$attrs['input-class'] || ''} size-${size}`"
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
      borderless:Boolean,
      size: {
        type: String,
        default: 'md'
      }
    },
    data () {
      return {}
    }
  }
</script>
<style lang="scss">
  .nq-input-field.size-xs {
    font-size: 0.75em;
  }
  .nq-input-field.size-sm {
    font-size: 1em;
  }
  .nq-input-field.size-md {
    font-size: 1.25em;
  }
  .nq-input-field.size-lg {
    font-size: 1.33em;
  }
  .nq-input-field.size-xl {
    font-size: 1.75em;
  }
  textarea.nq-input-field.q-field__native {
    line-height: 120%;
  }
</style>
