import axios from '@/libs/api.request'

const url = '/material'

export const getAllMaterialApi = () => {
  return axios.request({
    url: `${url}/all`,
    method: 'get'
  })
}

export const getMaterialApiByIdApi = (id) => {
  return axios.request({
    url: `${url}/getById/${id}`,
    method: 'get'
  })
}

export const getMaterialByNameApi = (name) => {
  return axios.request({
    url: `${url}/getByName/${name}`,
    method: 'get'
  })
}

export const addMaterialApi = (material) => {
  return axios.request({
    url: `${url}/add`,
    method: 'post',
    data: material
  })
}
