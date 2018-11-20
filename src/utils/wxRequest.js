import wepy from 'wepy'

const wxRequest = async (params = {}, url) => {
  const token = wx.getStorageSync('token')
  wx.showLoading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method == 'FORM' ? 'POST' : params.method || 'GET',
    data: data,
    header: {
      'Content-Type': params.method == 'FORM' ? 'application/x-www-form-urlencoded ' : 'application/json;charset=UTF-8;',
      'Authorization': data.wxSession,
      'Cookie': 'JSESSIONID=' + token,
      'token': token
    }
  })
  wx.hideLoading()
  if (res.statusCode == 401) {
    wx.setStorageSync('loginState', false)
    wx.reLaunch({url: 'login'})
  }
  console.log(res)
  return res
}

module.exports = {
  wxRequest
}
