<template>
  <q-layout class="nq-layout">
    <q-toolbar :class="toolbarClass || 'bg-primary text-white'">
      <slot name="title"></slot>
      <q-space />
      <q-tabs v-model="tab"
              class="nq-layout-tabs"
              :indicator-color="indicatorColor"
              shrink stretch inline-label>
        <div v-for="(tab, index) in tabs"
                     :name="`tab_${index}`"
                     :key="index"
                     :label="tab.title"
                     :icon="tab.icon"
                     flat
                     :is="tab.children ? 'QBtnDropdown' : 'QRouteTab'"
                     :to="tab.children ? null : tab.to">
          <q-list v-if="tab.children">
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
      <q-btn class="menu-button" flat round :icon="menuIcon" @click="drawer=!drawer" />
    </q-toolbar>
    <q-drawer
            v-model="drawer"
            overlay
            side="right"
            behavior="mobile"
            bordered
            class="nq-drawer"
            content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in tabs" :key="index">
          <q-item clickable :to="menuItem.to" v-ripple v-if="!menuItem.children">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.title }}
            </q-item-section>
          </q-item>
          <q-item-label header v-if="menuItem.children">{{menuItem.title}}</q-item-label>
          <div v-if="menuItem.children">
            <q-item v-for="(childItem, index) in menuItem.children" :key="index" clickable :to="childItem.to" v-ripple>
              <q-item-section v-if="" avatar>
                <q-icon :name="childItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ childItem.title }}
              </q-item-section>
            </q-item>
          </div>
          <q-separator />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <router-view />
  </q-layout>
</template>

<script>
  export default {
    name: 'NqLayout',
    props: {
      toolbarClass: String,
      indicatorColor: {
        type: String,
        default: 'secondary'
      },
      tabs: Array,
      menuIcon: {
        type: String,
        default: 'menu'
      }
    },
    data () {
      return {
        tab: 'tab_0',
        drawer: false
      }
    }
  }
</script>
