<template>
  <div class="nq-layout">
    <q-toolbar :class="toolbarClass || 'bg-primary text-white'">
      <slot name="title"></slot>
      <q-space />
      <q-tabs v-model="tab" shrink stretch inline-label>
        <div v-for="tab in tabs"
                     :name="tab.route"
                     :key="tab.route"
                     :label="tab.title"
                     :icon="tab.icon"
                     flat
                     :is="tab.children ? 'QBtnDropdown' : 'QRouteTab'"
                     :to="tab.children ? null : tab.route">
          <q-list>
            <q-item v-for="child in tab.children" :key="child.route" clickable :to="child.route">
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
