import wepy from 'wepy'

const wxRequest = async(params = {}, url) => {
  const token = wx.getStorageSync('token')
  wx.showLoading()
  let data = params.query || {}
  return new Promise(async(resolve, reject)=>{
    let res = await wepy.request({
      url: url,
      method: params.method == 'FORM' ? 'POST' : params.method || 'GET',
      data: data,
      header: {
        'Content-Type': params.method == 'FORM' ? 'application/x-www-form-urlencoded ' : 'application/json;charset=UTF-8;',
        'Authorization': data.wxSession,
        'Cookie': 'JSESSIONID=' + token,
        'token': token
      },
      success: data => {
        resolve(data)
      },
      fail: e => {
        reject(e)
      }
    })
    console.log(res)
    wx.hideLoading()
  })
}

module.exports = {
  wxRequest
}
