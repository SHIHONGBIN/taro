import requestAPI  from  '../../utils/request'
require('./../../../mock/index')



function getData(params) {
    const url = '/api/user'
    return requestAPI.get(url)
}



export {
  getData
}