export default {
  namespace: 'search',

  state: {
    search: [],
  },

  effects: {
    * getResult({ payload }, { put }) {
      console.log('是payload', payload);
      yield put({
        type: 'updateResult',
        payload: payload.data,
      });
    },
  },

  reducers: {
    updateResult(state, { payload }) {
      return ({
        ...state,
        search: payload,
      });
    },
  },
};
