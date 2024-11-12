"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_index = require("../../stores/index.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_wd_button2 = common_vendor.resolveComponent("wd-button");
  _easycom_wd_button2();
}
const _easycom_wd_button = () => "../../uni_modules/wot-design-uni/components/wd-button/wd-button.js";
if (!Math) {
  _easycom_wd_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      console.log(stores_index.userStore().token);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "success"
        }),
        b: common_vendor.p({
          type: "info"
        }),
        c: common_vendor.p({
          type: "warning"
        }),
        d: common_vendor.p({
          type: "error"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
