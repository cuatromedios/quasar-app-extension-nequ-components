<template>
  <main class="q-pa-lg nq-page" :class="{
    'max-width-xs': maxWidth === 'xs',
    'max-width-sm': maxWidth === 'sm',
    'max-width-md': maxWidth === 'md',
    'max-width-lg': maxWidth === 'lg',
    'max-width-xl': maxWidth === 'xl'
  }">
    <h1>{{ title }}</h1>
    <div class="row">
      <aside class="col-3" v-if="$slots.aside" >
        <slot name="aside"></slot>
      </aside>
      <div :class="{ 'col-9': $slots.aside}">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'NqLayout',
    props: {
      title: {
        type: String,
        default: ''
      },
      maxWidth: {
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
  .nq-page {
    margin: 0 auto;
    &.max-width-xs {
      max-width: $breakpoint-xs-min;
    }
    &.max-width-sm {
      max-width: $breakpoint-sm-min;
    }
    &.max-width-md {
      max-width: $breakpoint-md-min;
    }
    &.max-width-lg {
      max-width: $breakpoint-lg-min;
    }
    &.max-width-xl {
      max-width: $breakpoint-xl-min;
    }
  }
</style>
