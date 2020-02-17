<template>
  <main class="q-pa-lg nq-page" :class="{
    'max-width-xs': maxWidth === 'xs',
    'max-width-sm': maxWidth === 'sm',
    'max-width-md': maxWidth === 'md',
    'max-width-lg': maxWidth === 'lg',
    'max-width-xl': maxWidth === 'xl'
  }">
    <h1>{{ title }}</h1>
    <div class="row q-col-gutter-lg">
      <aside :class="{
      'col-1': asideCols === 1,
      'col-2': asideCols === 2,
      'col-3': asideCols === 3,
      'col-4': asideCols === 4,
      'col-5': asideCols === 5,
      'col-6': asideCols === 6,
      'col-7': asideCols === 7,
      'col-8': asideCols === 8,
      'col-9': asideCols === 9,
      'col-10': asideCols === 10,
      'col-11': asideCols === 11,
      }" v-if="$slots.aside" >
        <slot name="aside"></slot>
      </aside>
      <div class="col">
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
      },
      asideCols: {
        type: Number,
        default: 3
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
