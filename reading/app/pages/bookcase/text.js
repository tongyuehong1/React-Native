import { createAction } from '../helper';

export default {
  namespace: 'state',

  state: {
    article: [],
  },

  effects: {
    * save({ payload }, { put }) {
      console.log('aaaaaaaaa', payload);
      yield put(createAction('update')({ article: payload.data }));
    },
  },

  reducers: {
    update(state, { payload }) {
      return ({
        ...state,
        ...payload,
      });
    },
  },
};
