import {
  getBomListApi,
  deleteBomApi,
  addBomApi,
  modifyBomApi,
  getBomByIdApi
} from '@/api/bom'

export default {
  state: {
    bomList: [],
    bomInfo: null,
    bomInfoForHistory: null,
    _formItem: {
      name: null,
      // category: 'test2',
      model: null,
      description: null,
      values: [
        {
          // valueIndex: 1,
          name: null,
          number: null
        }
      ]
    },
    mode: 'ADD',
    bomStatusList: []
  },
  getters: {
    formItem (state) {
      return { ...state._formItem }
    },
    bomDataWithoutSensor (state) {
      if (state.bomList.length === 0) return []
      let sensorList = state.bomList.map((bom) => {
        const { name, id, values } = bom
        let list = []
        for (let value of values) {
          if (value.sensorId === null) list.push(value)
        }
        return {
          deviceName: name,
          deviceId: id,
          values: list
        }
      })
      return sensorList
    },
    bomListWithIdAndName (state) {
      return state.bomList.map(item => ({ name: item.name, id: item.id }))
    }
  },
  mutations: {
    resetFormItem (state) {
      state._formItem = {
        name: null,
        // category: 'test2',
        model: null,
        description: null,
        values: [
          {
            name: null,
            number: null
          }
        ]
      }
    },
    setBomList (state, bomList) {
      state.bomList = bomList
      // console.log(`set bom list ${JSON.stringify(state.bomList)}`)
    },
    addBom (state, newBom) {
      state.bomList.push(newBom)
    },
    deleteBom (state, { listId, bomId }) {
      // TODO: assert(listId === indexOfDevice)
      // const deleteDevice = state.deviceList.splice(listId, 1)
      const indexOfBom = state.bomList
        .map((bom) => bom.id)
        .indexOf(bomId)
      state.bomList.splice(indexOfBom, 1)
    },
    modifyBom (state, updateBomInfo) {
      const indexOfBom = state.bomList
        .map((bom) => bom.id)
        .indexOf(updateBomInfo.id)
      state.bomList[indexOfBom] = updateBomInfo
    },
    modeChange (state, newMode) {
      state.mode = newMode
    },
    setBomInfo (state, bomInfo) {
      state.bomInfo = bomInfo
    },
    setBomInfoForHistory (state, bomInfoForHistory) {
      state.bomInfoForHistory = bomInfoForHistory
    },
    setBomStatus (state, bomStatusList) {
      state.bomStatusList.push(bomStatusList)
    }
  },
  actions: {
    async getBomListAction ({ commit }) {
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve()
      //     return
      //   }, 3000)
      // })
      let res = await getBomListApi()
      commit('setBomList', res)
      // console.log(`Get bomList from DB ${JSON.stringify(res)}`)
    },
    async addBomAction ({ state, commit, getters, dispatch }, newBomInfo) {
      // TODO: 数据内容检查, try catch
      // let newDevice = newDeviceInfo
      // console.log(`Add bom ${JSON.stringify(newBomInfo)}`)
      let newBom = await addBomApi(newBomInfo)
      // newDevice = { ...newDevice, id: res.id }
      commit('addBom', newBom)
      // console.log(`Add bom ${JSON.stringify(newBom)}`)
      // await dispatch('getBomStatusAction')
    },
    async deleteBomAction ({ state, commit, dispatch }, listId) {
      // TODO: When delete device, I need to delete sensor that binding by this device
      const bomId = state.bomList[listId].id
      await deleteBomApi(bomId)
      commit('deleteBom', { listId, bomId })
      console.log(`Delete bom ${JSON.stringify(state.bomList[listId])}`)
    },
    async modifyBomListAction (
      { state, commit, dispatch },
      updateBomInfo
    ) {
      await modifyBomApi(updateBomInfo)
      let res = await getBomByIdApi(updateBomInfo.id)
      commit('modifyBom', res)
      // await dispatch('getBomStatusAction')
      console.log(`Modify bom: ${JSON.stringify(res)}`)
    }
    // async getBomStatusAction ({ state, dispatch, rootState }) {
    //   state.bomStatusList = []
    //   await dispatch('getSensorLatestStatusAction', {}, { root: true })
    // }
  }
}
