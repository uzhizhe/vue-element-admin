import request from '@/utils/request'

export function fetchUserInfoList(query) {
  return request({
    url: 'http://localhost:8002/uzhizhe/user/users',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createUserInfo(data) {
  console.log("Create User Info ", data)
  return request({
    url: 'http://localhost:8002/uzhizhe/user/users',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
