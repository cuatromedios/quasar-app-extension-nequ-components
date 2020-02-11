import Vue from 'vue'
import NqField from '../components/NqField.vue'
import NqInput from '../components/NqInput.vue'
import NqInputNumber from '../components/NqInputNumber.vue'
import NqInputCurrency from '../components/NqInputCurrency.vue'
import NqInputPercentage from '../components/NqInputPercentage.vue'
import NqSelect from '../components/NqSelect'
import NqForm from '../components/NqForm'
import NqTable from '../components/NqTable'

// we globally register our component
Vue.component('nq-field', NqField)
Vue.component('nq-input', NqInput)
Vue.component('nq-input-number', NqInputNumber)
Vue.component('nq-input-currency', NqInputCurrency)
Vue.component('nq-input-percentage', NqInputPercentage)
Vue.component('nq-select', NqSelect)
Vue.component('nq-form', NqForm)
Vue.component('nq-table', NqTable)
