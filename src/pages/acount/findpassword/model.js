import {validateForm} from './service'


export default {
  namespace: 'findpassword',
  state: {
  },
  effects:{
    *validateForm({payload}, { put, call, select }){
      const res = yield call(validateForm, payload);
      if(res){
        yield put({
          type:'changeData',
          payload:res.data
        })
      }
      return res.data
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