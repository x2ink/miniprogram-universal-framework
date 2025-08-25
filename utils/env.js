const accountInfo = wx.getAccountInfoSync();
const nowEnv = accountInfo.miniProgram.envVersion;
const env=nowEnv==="develop"?'dev':'pro'
export default env