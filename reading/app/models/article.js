import { createAction } from '../helper';

export default {
  namespace: 'article',
  state: {
    article: {
      author: 'liu qi',
      content: 'hello',
    },
  },
  effects: {
    * switchArticle({ payload }, { put }) {
      console.log(`switchArticle ${JSON.stringify(payload.data)}`);
      yield put(createAction('update')({ article: payload.data }));
    },
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        article: payload,
      };
    },
  },
};
