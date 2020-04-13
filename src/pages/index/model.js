import {getData} from './service'


export default {
  namespace: 'index',
  state: {
  },
  effects:{
    *getData({payload}, { put, call, select }){
      const res = yield call(getData, payload);
      if(res){
        yield put({
          type:'changeData',
          payload:res.data
        })
      }
      return res
    }
  },
  reducers: {
    changeData(state, {payload}){
      return {
        ...state,
        data:payload
      };
    }
  },
};