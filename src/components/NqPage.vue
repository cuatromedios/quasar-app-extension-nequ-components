<template>
  <main class="q-pa-lg nq-page" :class="{
    'max-width-xs': maxWidth === 'xs',
    'max-width-sm': maxWidth === 'sm',
    'max-width-md': maxWidth === 'md',
    'max-width-lg': maxWidth === 'lg',
    'max-width-xl': maxWidth === 'xl'
  }">
      <slot name="before"></slot>
      <h1>{{ title }}</h1>
      <slot name="between"></slot>
      <section class="row reverse q-col-gutter-lg">
        <article class="col">
          <slot></slot>
        </article>
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
      'col-12': asideCols === 12,

      'col-sm-1': asideColsSm === 1,
      'col-sm-2': asideColsSm === 2,
      'col-sm-3': asideColsSm === 3,
      'col-sm-4': asideColsSm === 4,
      'col-sm-5': asideColsSm === 5,
      'col-sm-6': asideColsSm === 6,
      'col-sm-7': asideColsSm === 7,
      'col-sm-8': asideColsSm === 8,
      'col-sm-9': asideColsSm === 9,
      'col-sm-10': asideColsSm === 10,
      'col-sm-11': asideColsSm === 11,
      'col-sm-12': asideColsSm === 12,

      'col-md-1': asideColsMd === 1,
      'col-md-2': asideColsMd === 2,
      'col-md-3': asideColsMd === 3,
      'col-md-4': asideColsMd === 4,
      'col-md-5': asideColsMd === 5,
      'col-md-6': asideColsMd === 6,
      'col-md-7': asideColsMd === 7,
      'col-md-8': asideColsMd === 8,
      'col-md-9': asideColsMd === 9,
      'col-md-10': asideColsMd === 10,
      'col-md-11': asideColsMd === 11,
      'col-md-12': asideColsMd === 12,

      'col-lg-1': asideColsLg === 1,
      'col-lg-2': asideColsLg === 2,
      'col-lg-3': asideColsLg === 3,
      'col-lg-4': asideColsLg === 4,
      'col-lg-5': asideColsLg === 5,
      'col-lg-6': asideColsLg === 6,
      'col-lg-7': asideColsLg === 7,
      'col-lg-8': asideColsLg === 8,
      'col-lg-9': asideColsLg === 9,
      'col-lg-10': asideColsLg === 10,
      'col-lg-11': asideColsLg === 11,
      'col-lg-12': asideColsLg === 12,

      'col-xl-1': asideColsXl === 1,
      'col-xl-2': asideColsXl === 2,
      'col-xl-3': asideColsXl === 3,
      'col-xl-4': asideColsXl === 4,
      'col-xl-5': asideColsXl === 5,
      'col-xl-6': asideColsXl === 6,
      'col-xl-7': asideColsXl === 7,
      'col-xl-8': asideColsXl === 8,
      'col-xl-9': asideColsXl === 9,
      'col-xl-10': asideColsXl === 10,
      'col-xl-11': asideColsXl === 11,
      'col-xl-12': asideColsXl === 12,

      }" v-if="$slots.aside" >
          <slot name="aside"></slot>
        </aside>
      </section>
      <slot name="after"></slot>
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
        default: 12
      },
      asideColsSm: {
        type: Number,
        default: 4
      },
      asideColsMd: {
        type: Number,
        default: 3
      },
      asideColsLg: {
        type: Number,
        default: 3
      },
      asideColsXl: {
        type: Number,
        default: 3
      }
    },
    data () {
      return {}
    }
  }
</script>
