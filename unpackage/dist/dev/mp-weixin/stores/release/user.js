"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore("user", {
  unistorage: true,
  // 是否持久化
  state: () => {
    return {
      token: "",
      userInfo: {
        Id: "",
        CreatedAt: ""
      }
    };
  },
  getters: {
    loginStatus: (state) => state.token.length > 0
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUserInfo(info) {
      this.userInfo = info;
    },
    clearTokenInfo() {
      this.token === "";
      common_vendor.index.removeStorageSync("test_user");
    }
  }
});
