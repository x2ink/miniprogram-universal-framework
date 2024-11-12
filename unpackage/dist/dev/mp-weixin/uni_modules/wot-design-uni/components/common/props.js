"use strict";
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
