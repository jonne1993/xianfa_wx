// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  wx.request({
    url: 'test.php', //仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      return res.data
    }
  })
 
  return {
    openid: event.userInfo.openId,
  }
}