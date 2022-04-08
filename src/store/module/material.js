import {
  addMaterialApi,
  getAllMaterialApi,
  getMaterialApiByIdApi,
  getMaterialByNameApi
} from '@/api/material'
import { addEdge, getEdgeList } from '@/api/edge-management'

export default {
  state: {
    materialList: [],
    materialData: {}
  },
  mutations: {
    setMaterialList (state, materialList) {
      // console.log(res)
      // let materialList = res.map((item) => {
      //   let ret = {
      //     ...item
      //   }
      //   return ret
      // })
      state.materialList = materialList
      console.log('material:' + state.materialList.length)
    },
    deleteModel (state, id) {
      state.modelList = state.modelList.filter((model) => model.id !== id)
    },
    addMaterial (state, model) {
      state.materialList = state.materialList.concat(model)
    },
    updateMaterial (state, { id, materialInfo }) {
      // TODO: update
      let materialIndex = state.materialList.findIndex(
        (materialInfo) => materialInfo.id === id
      )
      state.materialList[materialIndex] = materialInfo
    },
    setMaterial (state, data) {
      state.materialData = data
    }
  },
  actions: {
    async getAllMaterialListAction ({ commit }) {
      // let res = await getAllMaterialApi()
      // commit('setMaterialList', res)
      return new Promise((resolve, reject) => {
        getAllMaterialApi()
          .then((res) => {
            console.log('获取所有原料：' + res)
            commit('setMaterialList', res)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async insertMaterialAction ({ commit }, data) {
      return new Promise((resolve, reject) => {
        addMaterialApi(data)
          .then((res) => {
            commit('addMaterial', res)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
      // let ret = null
      // try {
      //   console.log('module' + data)
      //   await addMaterialApi(data)
      //   // commit("addModel", res);
      //   ret = Promise.resolve()
      // } catch (e) {
      //   ret = Promise.reject(e)
      // }
      // return ret
    }
  }
}
