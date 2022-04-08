import axios from '@/libs/api.request'

export const getBomListApi = () => {
  return axios.request({
    url: 'bom',
    method: 'get'
  })
}

export const addBomApi = (bom) => {
  let { name, model, description, values } = bom
  values = values.map(({ name, number }) => ({ name, number }))
  return axios.request({
    url: 'bom',
    method: 'post',
    data: {
      name,
      model,
      description,
      values
    }
  })
}

export const deleteBomApi = (bomId) => {
  return axios.request({
    url: `bom/${bomId}`,
    method: 'delete'
  })
}

export const modifyBomApi = (updateBomInfo) => {
  const { id, name, model, description, values } = updateBomInfo
  return axios.request({
    url: `bom/${id}`,
    method: 'put',
    data: {
      name,
      model,
      description,
      values
    }
  })
}

export const getBomByIdApi = (bomId) => {
  return axios.request({
    url: `bom/${bomId}`,
    method: 'get'
  })
}
