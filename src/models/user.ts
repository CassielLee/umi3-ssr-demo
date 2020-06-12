interface LoginPopState {
  show: boolean;
  callback: Function;
}
interface UserState {
  loginState: boolean;
  addressList: Array<any>;
  loginPop: LoginPopState;
}

export default {
  namespace: 'user',

  state: {
    someData: [],
  },

  effects: {
    *getSomeData({ payload }: any, { call, put }: any) {
      yield put({
        type: 'saveData',
        payload: {
          someData: [
            { text: 'test1' },
            { text: 'test2' },
            { text: 'test3' },
            { text: 'test4' },
          ],
        },
      });
    },
  },

  reducers: {
    saveData(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
