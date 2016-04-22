import axios from 'axios'

export const changeAge = () => {
  return axios.get('/fetchTrue')
    .then(request => {
      return Promise.resolve({
        type: 'CHANGE_AGE',
        payload: request.data
      })
    })
}
