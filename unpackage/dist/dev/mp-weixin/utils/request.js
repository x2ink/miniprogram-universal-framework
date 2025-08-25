"use strict";
const common_vendor = require("../common/vendor.js");
const utils_env = require("./env.js");
var baseUrl = utils_env.env === "dev" ? "https://dev.x2.ink/api/" : "https://pro.x2.ink/api/";
common_vendor.index.__f__("log", "at utils/request.js:3", baseUrl);
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
