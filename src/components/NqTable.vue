<template>
  <q-table v-bind="$attrs"
           v-on="$listeners"
           :columns="computedColumns"
           table-header-class="bg-secondary text-weight-bold"
           class="nq-table nq-component"
           >
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
    <template v-slot:body-cell-actions="props" v-if="actions">
      <q-td :props="props">
        <div class="nq-row-actions">
          <q-btn v-for="action in actions"
                 :key="`${action.icon}-${action.tooltip}-${action.label}-${action.color}`"
                 size="sm"
                 :round="!action.label"
                 :label="action.label"
                 class="q-mx-sm"
                 :color="action.color ? action.color : 'primary'"
                 @click="action.method(props.row)"
                 :icon="action.icon">
            <q-tooltip v-if="action.tooltip" anchor="top middle">
              {{ action.tooltip }}
            </q-tooltip>
          </q-btn>
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script>
  export default {
    name: 'NqTable',
    props: {
      actions: {
        type: Array,
        default: null
      },
      columns: {
        type: Array,
        default: null
      }
    },
    data () {
      return {}
    },
    computed: {
      computedColumns () {
        if (this.actions) {
          return this.columns.concat({
            name: 'actions',
            label: '',
            align: 'right'
          })
        } else {
          return this.columns
        }
      }
    }
  }
</script>
<style lang="scss">
  .nq-table tr {
    .nq-row-actions {
      visibility: hidden;
    }
    &:hover {
      .nq-row-actions {
        visibility: visible !important;
      }
    }
  }
</style>
