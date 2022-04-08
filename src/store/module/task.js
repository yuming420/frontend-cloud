import {
  getTaskListApi,
  deleteTaskApi,
  addTaskApi,
  modifyTaskApi,
  getTaskByIdApi
} from '@/api/task'

export default {
  state: {
    taskList: [],
    taskInfo: null,
    _formItem: {
      name: null,
      // category: 'test2',
      dueTime: null,
      priority: null,
      values: [
        {
          valueIndex: 1,
          name: null,
          model: null,
          number: null,
          bomID: null,
          detail: null
        }
      ]
    },
    mode: 'ADD',
  },
  getters: {
    formItem (state) {
      return { ...state._formItem }
    },
    taskDataWithoutSensor (state) {
      if (state.taskList.length === 0) return []
      let sensorList = state.taskList.map((task) => {
        const { name, id, values } = task
        let list = []
        for (let value of values) {
          if (value.sensorId === null) list.push(value)
        }
        return {
          taskName: name,
          taskId: id,
          values: list
        }
      })
      return sensorList
    },
    taskListWithIdAndName (state) {
      return state.taskList.map(item => ({ name: item.name, id: item.id }))
    }
  },
  mutations: {
    resetFormItem (state) {
      state._formItem = {
        name: null,
        // category: 'test2',
        dueTime: null,
        priority: null,
        values: [
          {
            valueIndex: 1,
            name: null,
            model: null,
            number: null,
            bomID: null,
            detail: null
          }
        ]
      }
    },
    setTaskList (state, taskList) {
      state.taskList = taskList
    },
    addTask (state, newTask) {
      state.taskList.push(newTask)
    },
    deleteTask (state, { listId, taskId }) {
      // TODO: assert(listId === indexOfDevice)
      // const deleteDevice = state.deviceList.splice(listId, 1)
      const indexOfTask = state.taskList
        .map((task) => task.id)
        .indexOf(taskId)
      state.taskList.splice(indexOfTask, 1)
    },
    modifyTask (state, updateTaskInfo) {
      const indexOfTask = state.taskList
        .map((task) => task.id)
        .indexOf(updateTaskInfo.id)
      state.taskList[indexOfTask] = updateTaskInfo
    },
    modeChange (state, newMode) {
      state.mode = newMode
    },
    setTaskInfo (state, taskInfo) {
      state.taskInfo = taskInfo
    },
    setTaskInfoForHistory (state, taskInfoForHistory) {
      state.taskInfoForHistory = taskInfoForHistory
    },
    setTaskStatus (state, taskStatusList) {
      state.taskStatusList.push(taskStatusList)
    }
  },
  actions: {
    async getTaskListAction ({ commit }) {
      // await new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve()
      //     return
      //   }, 3000)
      // })
      let res = await getTaskListApi()
      commit('setTaskList', res)
      console.log('Get taskList from DB')
    },
    async addTaskAction ({ state, commit, getters, dispatch }, newTaskInfo) {
      // TODO: 数据内容检查, try catch
      // let newDevice = newDeviceInfo
      console.log('addTaskAction' + `${JSON.stringify(newTaskInfo)}`)
      let newTask = await addTaskApi(newTaskInfo)
      // newDevice = { ...newDevice, id: res.id }
      commit('addTask', newTask)
      console.log(`Add task ${JSON.stringify(newTask)}`)
      // await dispatch('getTaskStatusAction')
    },
    async deleteTaskAction ({ state, commit, dispatch }, listId) {
      // TODO: When delete device, I need to delete sensor that binding by this device
      const taskId = state.taskList[listId].id
      await deleteTaskApi(taskId)
      commit('deleteTask', { listId, taskId })
      console.log(`Delete task ${JSON.stringify(state.taskList[listId])}`)
    },
    async modifyTaskListAction (
      { state, commit, dispatch },
      updateDeviceInfo
    ) {
      await modifyTaskApi(updateTaskInfo)
      let res = await getTaskByIdApi(updateTaskInfo.id)
      commit('modifyTask', res)
      await dispatch('getTaskStatusAction')
      console.log(`Modify task: ${JSON.stringify(res)}`)
    },
    async getTaskStatusAction ({ state, dispatch, rootState }) {
      state.taskStatusList = []
      await dispatch('getSensorLatestStatusAction', {}, { root: true })
    }
  }
}
