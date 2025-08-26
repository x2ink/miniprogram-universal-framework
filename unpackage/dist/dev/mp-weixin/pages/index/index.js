"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
require("../../utils/request.js");
require("../../stores/index.js");
if (!Array) {
  const _easycom_navbar2 = common_vendor.resolveComponent("navbar");
  _easycom_navbar2();
}
const _easycom_navbar = () => "../../components/navbar/navbar.js";
if (!Math) {
  (_easycom_navbar + Home + Myself)();
}
const Home = () => "./home.js";
const Myself = () => "./myself.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const current = common_vendor.ref(0);
    common_vendor.ref(null);
    const navBarHeight = common_vendor.ref(0);
    const scrollHeight = common_vendor.computed(() => {
      return `calc(100vh - ${utils_common.getOs() == "ios" ? "env(safe-area-inset-bottom)" : 0} - ${navBarHeight.value} - 180rpx`;
    });
    common_vendor.onMounted(() => {
      const systemInfo = common_vendor.wx$1.getWindowInfo();
      const statusBarHeight = systemInfo.statusBarHeight;
      navBarHeight.value = statusBarHeight + "px";
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: current.value == 0
      }, current.value == 0 ? {
        b: scrollHeight.value
      } : {
        c: scrollHeight.value
      }, {
        d: common_assets._imports_0,
        e: common_assets._imports_0,
        f: common_vendor.unref(utils_common.getOs)() == "ios" ? "env(safe-area-inset-bottom)" : ""
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
