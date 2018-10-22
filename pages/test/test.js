Page({
  data: {
    mytxt: 'click me'
  },
  onLoad: function () {
    var appInstance = getApp()
    //console.log(appInstance.globalData) // I am global data
    //console.log(appInstance.globalData) // I am global data
  },
  clickMe: function(e){
    console.log("被点击事件触发...",e);
  }
})
