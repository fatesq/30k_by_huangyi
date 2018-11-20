import { wxRequest } from '../utils/wxRequest'

const url = 'http://121.199.63.157:134'
// 获取登陆授权
const login = (params) => wxRequest(params, `${url}/login/go`)
// 绑定账户
const bind = (params) => wxRequest(params, `${url}/login/bind`)
// 忘记密码
const forgetPwd = (params) => wxRequest(params, `${url}/login/forgetPwd`)
// 登出
const loginOut = (params) => wxRequest(params, `${url}/login/out`)

module.exports = {
  login,
  bind,
  forgetPwd,
  loginOut
}
