/*
 CustomListItems
 {
            date:'xyz2',
            IsCustomized:true,
            code:'abc2'
  } */
var app = getApp()
Page({
  data: {
    CustomListItems:[]
  },
  CustomItemClicked:function(e){
      console.log(e.currentTarget.dataset.code)
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
      })
  },
  addCustom:function(e){
      wx.navigateTo({
        url: '/pages/index/select',
        success: function(res){
          // success
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
