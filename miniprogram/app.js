//app.js
var  uuid  =  require('../libs/node-uuid/uuid.modified.js'); 
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })


    }

    this.globalData = {
        ApiUrl : 'https://api.tenclouds.cn/xianfa/',
        openid : '',
        tokenid : this.uuid.v4()
    }
  }
})
