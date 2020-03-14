<template>
  <div class="nq-layout">
    <q-toolbar :class="toolbarClass || 'bg-primary text-white'">
      <slot name="title"></slot>
      <q-space />
      <q-tabs v-model="tab" shrink stretch inline-label>
        <div v-for="(tab, index) in tabs"
                     :name="`tab_${index}`"
                     :key="index"
                     :label="tab.title"
                     :icon="tab.icon"
                     flat
                     :is="tab.children ? 'QBtnDropdown' : 'QRouteTab'"
                     :to="tab.children ? null : tab.to">
          <q-list>
            <q-item v-for="(child, index) in tab.children" :key="index" clickable :to="child.to">
              <q-item-section>{{ child.title }}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-route-tab v-if="false" />
        <q-btn-dropdown v-if="false">
          <q-list>
            <q-item>
              <q-item-section></q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </q-toolbar>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'NqLayout',
    props: {
      toolbarClass:String,
      tabs:Array
    },
    data () {
      return {
        tab: 'tab1'
      }
    }
  }
</script>
