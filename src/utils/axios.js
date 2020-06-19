import axios from 'axios'
import Qs from 'qs'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  let resp = error.response
  switch(resp.status){
    case 301: 
      break;
    case 404:
      break;
    case 500:
      break;  
  }
  // 对响应错误做点什么
  return Promise.resolve(error);
});


const get_ = function(url,params){
  return  axios({
    url:url,
    method: 'get', // 默认是 get
    timeout: 1000,
    headers: {'withCredentials':true},
    responseType: 'json'
  })
}

const post_ = function(url,params){
  return axios({
    url:url,
    method: 'post', // 默认是 get
    params:params,
    headers: {'withCredentials':true},
    paramsSerializer: function(params) {
      return Qs.stringify(params)
    },
    timeout: 1000,
    responseType: 'json'
  })
}

const put_ = function(url){
  return  axios.get(url).catch(function (error) {
    alert(error);
  });
}

const delete_ = function(url){
  return // 为给定 ID 的 user 创建请求
  axios.get(url).catch(function (error) {
    alert(error);
  });
}

export default {
  get_,
  post_,
  put_,
  delete_
}