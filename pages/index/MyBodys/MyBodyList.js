/* BodyListItems
        {
            Name:'xyz1',
            code:'abc1'
        }
 */
var app = getApp()
Page({
  data: {
    BodyListItems:[],
    isLongTap:false
  },
  onLoad:function(e){
    var that = this;
    wx.request({
      url: 'http://192.168.247.130:8000/api-auth/get_bodys/',
      data: {
        weixinOpenId:'o97I8xCwM2_8mxKwewervKuioX-q'//that.globalData.openid
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          BodyListItems:res.data
        })
      },
      fail: function() {
        
      },
      complete: function() {
        // complete
      }
    })
  },
  BodyItemClicked:function(e){
    console.log(this.isLongTap);
    if(this.isLongTap) return;
      wx.navigateTo({
        url: '/pages/index/MyCustomize/CustomizeList',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      });
  },
  BodyItemLongTap:function(e){
    this.isLongTap = true;
    var that = this;
    var target = '/pages/index/select?name='+e.currentTarget.dataset.code;
    console.log(target);
    wx.navigateTo({
        url: target,
        success: function(res){
         
        },
        fail: function() {
          // fail
        },
        complete: function() {
         
        }
      });
      //console.log(e.currentTarget.dataset.personName);
  },
  ontouchstart:function(e){
    this.isLongTap = false;
    //console.log('/pages/index/select?personName='+e.currentTarget.dataset.code);
  }
})