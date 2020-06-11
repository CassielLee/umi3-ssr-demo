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
    loginState: false,
    addressList: [],
    loginPop: {
      show: false,
      callback: null,
    },
  },

  effects: {},

  reducers: {},
};
