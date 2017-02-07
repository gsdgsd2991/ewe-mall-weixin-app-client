var app = getApp()
Page({
  data: {
    sexItems:[
        {name:'男',value:'male'},
        {name:'女',value:'female'}
    ],
    bodyItems:[
        {name:'pear',value:'梨型'},
        {name:'apple',value:'苹果型'},
        {name:'ReverTriangle',value:'倒三角'}
    ],
    faceItems:[

    ],
    colorItems:[

    ],
    name:undefined,
    customerBody:null,
   // BodyListItems:[]
  },
  sexChanged:function(e){
     // console.log(e.detail.value)
  },
  bodyChanged:function(e){

  },
  faceChanged:function(e){

  },
  colorChanged:function(e){
      
  },
  onReady:function(){
    var that = this;
     if(name  != "undefined")
    {
        wx.request({
        url: 'http://192.168.247.130:8000/api-auth/get_bodys/',
        data: {
          weixinOpenId:'o97I8xCwM2_8mxKwewervKuioX-q'//that.globalData.openid
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // that.setData({BodyListItems:res.data});
          // console.log(that.BodyListItems);     
           for(var i = 0;i < res.data.length;i++)
           {
            if(res.data[i].customization_person_name == name)
            {
              that.setData({customerBody:res.data[i]});
            }
           }
           console.log(res.data);
        },
        fail: function() {
          
        },
        complete: function() {
          // complete
        },
      });
    }
  },
  onLoad:function(option){   
    var that = this;
    name=option['name']
   
  },
  confirmButtonTaped:function(e){

  },
})
