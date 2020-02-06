import Vue from 'vue'
import NqInput from '../components/NqInput.vue'
import NqInputNumber from '../components/NqInputNumber.vue'
import NqInputCurrency from '../components/NqInputCurrency.vue'
import NqInputPercentage from '../components/NqInputPercentage.vue'
import NqSelect from '../components/NqSelect'

// we globally register our component
Vue.component('nq-input', NqInput)
Vue.component('nq-input-number', NqInputNumber)
Vue.component('nq-input-currency', NqInputCurrency)
Vue.component('nq-input-percentage', NqInputPercentage)
Vue.component('nq-select', NqSelect)
