import axios from '@/libs/api.request'
import { getToken, getUserIdFromToken } from '@/libs/util'
// import moment from 'moment'
export const getTaskListApi = () => {
  console.log('getTaskListApi')
  return axios.request({
    url: 'task',
    method: 'get'
  })
}

export const addTaskApi = (task) => {
  console.log('addTaskApi' + `${JSON.stringify(task)}`)
  // let { name, dueTime, priority, values } = task
  let name = task.name
  let dueTime = task.dueTime
  dueTime = dueTime.replace('T', ' ')
  // dueTime = dueTime.format('yyyy-MM-dd HH:mm')
  let priority = task.priority
  let content = task.values
  let releaseTime = new Date()

  releaseTime = releaseTime.getFullYear() + '-' + releaseTime.getMonth() + '-' + releaseTime.getDate() + ' ' + releaseTime.getHours() + ':' + releaseTime.getMinutes()
  let owner = getUserIdFromToken(getToken())
  let status = '创建完成'
  console.log('name:' + name)
  console.log('dueTime:' + dueTime)
  console.log('priority:' + priority)
  console.log('releaseTime:' + releaseTime)
  console.log('owner:' + owner)
  content = content.map(({ name, model, number, bomID, detail }) => ({ name, model, number, bomID, detail }))
  console.log('content:' + `${JSON.stringify(content)}`)
  return axios.request({
    url: 'task/add',
    method: 'post',
    data: {
      name,
      owner,
      dueTime,
      releaseTime,
      priority,
      status,
      content
    }
  })
}

export const deleteTaskApi = (taskId) => {
  return axios.request({
    url: `task/${taskId}`,
    method: 'delete'
  })
}

export const modifyTaskApi = (updateTaskInfo) => {
  const { id, name, model, description, values } = updateTaskInfo
  return axios.request({
    url: `task/${id}`,
    method: 'put',
    data: {
      name,
      model,
      description,
      values
    }
  })
}

export const getTaskByIdApi = (taskId) => {
  return axios.request({
    url: `task/${taskId}`,
    method: 'get'
  })
}
