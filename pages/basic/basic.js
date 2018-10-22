Page({
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    mycontent: '<img class="course-banner" src="//img.mukewang.com/szimg/5afb8aa900014cc705400300-280-160.jpg" alt="SpringBoot 仿抖音短视频小程序开发 全栈式实战项目" title="SpringBoot 仿抖音短视频小程序开发 全栈式实战项目">',
    mycontent2: [
      {
        name: "img",
        attrs: {
          class: "course-banner",
          src: "//img.mukewang.com/szimg/5afb8aa900014cc705400300-280-160.jpg"
        }
      }
    ],
    mypercent:15
  },
  addPercent: function () {
    var newPercent = this.data.mypercent + 20;
    this.setData({
      mypercent: newPercent
    })
  }
})