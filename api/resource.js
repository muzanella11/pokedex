import axios from 'axios'
import handler from './handler'

function createResource () {
  const instance = axios.create({
    baseURL: process.env.pokeapiHost,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 100000 // Too slow response from server :(
  })

  instance.interceptors.request.use(config => {
    // for intercept request or header request
    return config
  }, error => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use(response => {
    return Promise.resolve(response)
  }, error => {
    return handler(error)
  })

  return instance
}

export default createResource()
