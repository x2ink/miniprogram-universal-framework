"use strict";
const numericProp = [Number, String];
const makeRequiredProp = (type) => ({
  type,
  required: true
});
const makeBooleanProp = (defaultVal) => ({
  type: Boolean,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
const baseProps = {
  /**
   * 自定义根节点样式
   */
  customStyle: makeStringProp(""),
  /**
   * 自定义根节点样式类
   */
  customClass: makeStringProp("")
};
exports.baseProps = baseProps;
exports.makeBooleanProp = makeBooleanProp;
exports.makeRequiredProp = makeRequiredProp;
exports.makeStringProp = makeStringProp;
exports.numericProp = numericProp;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/wot-design-uni/components/common/props.js.map
