import { wxRequest } from '../utils/wxRequest'

const url = 'http://121.199.63.157:134'
// 获取登陆授权
const login = (params) => wxRequest(params, `${url}/login/go`)
// 校验
const checktoken = (params) => wxRequest(params, `${url}/login/checktoken`)
// 绑定账户
const bind = (params) => wxRequest(params, `${url}/login/bind`)
// 忘记密码
const forgetPwd = (params) => wxRequest(params, `${url}/login/forgetPwd`)
// 登出
const loginOut = (params) => wxRequest(params, `${url}/login/out`)
// 进件开始
const projectStart = (params) => wxRequest(params, `${url}/saveProject/start`)
// 进件品牌概况
const saveBrandStart = (params) => wxRequest(params, `${url}/saveProject/brandStart`)
// 进件品牌行业相关
const brandIndustryStart = (params) => wxRequest(params, `${url}/saveProject/brandIndustryStart`)
// 进件项目概况
const info = (params) => wxRequest(params, `${url}/saveProject/info`)
// 进件项目组织情况
const organization = (params) => wxRequest(params, `${url}/saveProject/organization`)
// 进件项目行业相关/行业经营信息
const industry = (params) => wxRequest(params, `${url}/saveProject/industry`)
// 进件投资参考信息
const investment = (params) => wxRequest(params, `${url}/saveProject/investment`)
// 进件保存客户群体
const customer = (params) => wxRequest(params, `${url}/saveProject/customer`)

// 获取所有行业
const loadAllIndustry = (params) => wxRequest(params, `${url}/searchProject/loadAllIndustry`)
// 获取id对应项目列表
const loadAllProjectByIndustryId = (params) => wxRequest(params, `${url}/searchProject/loadAllProjectByIndustryId`)
// 获取项目信息(projectId或项目名获取)
const loadProjectByCodeOrName = (params) => wxRequest(params, `${url}/searchProject/loadProjectByCodeOrName`)
// 获取品牌概况
const loadBrandByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadBrandByProjectId`)
// 获取品牌行业相关
const loadBrandIndustryByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadBrandIndustryByProjectId`)
// 获取项目概况
const loadProjectByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadProjectByProjectId`)
// 获取项目组织概况
const loadProjectOrganizationByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadProjectOrganizationByProjectId`)
// 获取客户群体画像
const loadCustomerByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadCustomerByProjectId`)
// 获取项目行业信息
const loadProjectIndustryByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadProjectIndustryByProjectId`)
// 获取融资经营信息
const loadInvestmentByProjectId = (params) => wxRequest(params, `${url}/searchProject/loadInvestmentByProjectId`)

// 查询账号关联的一级分类行业列表
const selectFirstLevelIndustry = (params) => wxRequest(params, `${url}/customer/selectFirstLevelIndustry`)
// 获取位置列表
const loadAllPosition = (params) => wxRequest(params, `${url}/searchProject/loadAllPosition`)
// 获取行业列表
const loadAllIndustryCarefulInfo = (params) => wxRequest(params, `${url}/searchProject/loadAllIndustryCarefulInfo`)

// 新增企业成员
const createEEAndMember = (params) => wxRequest(params, `${url}/enterprise/createEEAndMember`)
// 获取地区
const loadAllParentArea = (params) => wxRequest(params, `${url}/searchProject/loadAllParentArea`)
module.exports = {
  url,
  login,
  checktoken,
  bind,
  forgetPwd,
  loginOut,
  projectStart,
  saveBrandStart,
  loadAllIndustry,
  brandIndustryStart,
  info,
  organization,
  industry,
  investment,
  customer,
  loadAllProjectByIndustryId,
  loadProjectByCodeOrName,
  loadBrandByProjectId,
  loadBrandIndustryByProjectId,
  loadProjectByProjectId,
  loadProjectOrganizationByProjectId,
  loadCustomerByProjectId,
  loadProjectIndustryByProjectId,
  loadInvestmentByProjectId,
  selectFirstLevelIndustry,
  loadAllPosition,
  loadAllIndustryCarefulInfo,
  createEEAndMember,
  loadAllParentArea
}
