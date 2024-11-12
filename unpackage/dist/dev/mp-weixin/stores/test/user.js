"use strict";
const common_vendor = require("../../common/vendor.js");
const test_userModule = common_vendor.defineStore("test_user", {
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
exports.test_userModule = test_userModule;
