// utils/axios.js
import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//localhost:7001' : '';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    console.error('response pattern is wrong:', res.data);
    return Promise.reject(res);
  }
  if (res.data.status != 200) {
    if (res.data.message) {
      console.error('response status is wrong:', res.data);
    }
    return Promise.reject(res.data);
  }
  return res.data;
});

export default axios;