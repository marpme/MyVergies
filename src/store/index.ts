import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'

import modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState()
  ]
})
