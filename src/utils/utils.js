function alert(str) {
  wx.showModal({
    showCancel: false,
    title: '提示',
    content: str,
    success: function(res) {
      if (res.confirm) {

      }
    }
  })
}

module.exports = {
  alert
}
