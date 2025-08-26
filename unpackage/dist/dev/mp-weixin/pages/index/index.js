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
  (_easycom_navbar + Home + Myself + Login)();
}
const Home = () => "./home.js";
const Myself = () => "./myself.js";
const Login = () => "../../components/login/login.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const current = common_vendor.ref(0);
    common_vendor.ref(null);
    const navBarHeight = common_vendor.ref(0);
    const scrollHeight = common_vendor.computed(() => {
      return `calc(100vh - ${utils_common.getOs() == "ios" ? "env(safe-area-inset-bottom)" : 0} - 88rpx`;
    });
    const tabbars = common_vendor.ref([{
      value: 0,
      key: "首页"
    }, {
      value: 1,
      key: "我的"
    }]);
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
        c: common_vendor.p({
          hideNav: true
        }),
        d: scrollHeight.value
      }, {
        e: common_vendor.f(tabbars.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.key),
            b: current.value == item.value ? 1 : "",
            c: common_vendor.o(($event) => current.value = item.value, item.value),
            d: item.value
          };
        }),
        f: common_assets._imports_0,
        g: common_vendor.unref(utils_common.getOs)() == "ios" ? "env(safe-area-inset-bottom)" : ""
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
