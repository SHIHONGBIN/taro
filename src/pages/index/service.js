import requestAPI  from  '../../utils/request'
require('./../../../mock/index')



function getData(params) {
    const url = '/api/user'
    return requestAPI.get(url)
}

function validateForm(params) {
  const url = '/api/user'
  return requestAPI.post(url, params)
}

export {
  getData,
  validateForm
}