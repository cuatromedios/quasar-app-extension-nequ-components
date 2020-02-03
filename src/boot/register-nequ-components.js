import Vue from 'vue'
import NqInput from '../components/NqInput.vue'
import NqInputNumber from '../components/NqInputNumber.vue'
import NqInputCurrency from '../components/NqInputCurrency.vue'

// we globally register our component
Vue.component('nq-input', NqInput)
Vue.component('nq-input-number', NqInputNumber)
Vue.component('nq-input-currency', NqInputCurrency)
