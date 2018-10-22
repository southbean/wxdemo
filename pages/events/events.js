var common = require('../utils/common.js')

Page({
  data: {
    mytxt: 'click me'
  },
  clickMe: function(e){
    console.log("被点击事件触发...",e);

    var customdata = e.currentTarget.dataset.customdata;
    console.log(customdata);
    var sex = e.currentTarget.dataset.sex;
    console.log(sex);

    common.hello('MINA')
    common.sayGoodbye('MINA')
  }
})
