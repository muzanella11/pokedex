import endpoint from './../endpoint'
import resource from '../resource'
import axios from 'axios'

const AxiosCancelToken = axios.CancelToken
const NAMESPACE = 'POKEMON'

export default {
  list (param) {
    let cancel
    const CANCEL_METHOD = `${NAMESPACE}_FETCH_LIST`
    const request = resource.get(`${endpoint.pokemon.root}?${param}`, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    if (process.browser) {
      window[CANCEL_METHOD] = cancel
    }

    return request
  },

  detail (name) {
    let cancel
    const CANCEL_METHOD = `${NAMESPACE}_FETCH_DETAIL`
    const request = resource.get(`${endpoint.pokemon.root}${name}`, {
      cancelToken: new AxiosCancelToken(cancelRequest => {
        cancel = cancelRequest
      })
    })

    if (process.browser) {
      window[CANCEL_METHOD] = cancel
    }

    return request
  }
}
