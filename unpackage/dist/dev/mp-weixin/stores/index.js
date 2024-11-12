"use strict";
require("./release/user.js");
const stores_test_user = require("./test/user.js");
const userStore = () => {
  {
    return stores_test_user.test_userModule();
  }
};
exports.userStore = userStore;
