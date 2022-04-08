import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import edgeManagement from './module/edge-management'
import processManagement from './module/process-management'
import modelManagement from './module/model-management'
import material from '@/store/module/material'
import device from './module/device'
import bom from './module/bom'
import task from './module/task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    edgeManagement,
    processManagement,
    modelManagement,
    material,
    device,
    bom,
    task
  }
})
