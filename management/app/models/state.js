import { createAction } from '../helper';

export default {
  namespace: 'state',
  state: {
    student: true,
  },
  effects: {
    * switchToStudent(payload, { put }) {
      yield put(createAction('update')({ student: true }));
    },
    * switchToTeacher(payload, { put }) {
      yield put(createAction('update')({ student: false }));
    },
  },
  reducers: {
  },
  subscriptions: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
