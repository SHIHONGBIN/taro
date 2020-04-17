import requestAPI  from  '../../../utils/request'
require('../../../../mock/index')



function findPassWord(params) {
    const url = '/api/findPassWord'
    return requestAPI.get(url)
}

export {
  getData,
  validateForm
}