//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (loginRes) {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })

          //获取用户openid
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code='+loginRes.code+'&grant_type=authorization_code',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              that.globalData.openid = res.openid
              that.globalData.session_key = res.session_key
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
          //用户注册
          wx.request({
            url: 'https://localhost:5000/api/login',
            data: {
              open_id:that.globalData.openid,
              session_key:that.globalData.session_key
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
              if(res.is_inserted == true)
                return true
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})