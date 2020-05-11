// pages/home/home.js
let app = getApp()
Page({
  
  data: {
    message: 'Hello world',
    list: [1,2,3,4],
    count: 0
  },
  onLoad() {
    const _this = this
    wx.request({
      
      url: "http://152.136.185.210:8000/api/n3/home/multidata",
      success:function(res) {
        const list = res.data.data.banner.list
        console.log(list)
        _this.setData({
          list: list
        })
        // console.log(home)
      }
    })
  },
  countIncrease() {
    this.setData({
      count:++this.data.count

    })
    // 界面不会刷新
    // this.data.count++
    console.log(this.data.count)
  },
  handleGetUserInfo(event) {
    console.log(event.detail.userInfo)
    
    console.log(app.globalData.name)
  },
  countDecrease() {
    this.setData({
      count: --this.data.count
    })
  },
  onHide: function() {
    console.log("home is onHide")
  },
  onPageScroll(scroll) {
    // console.log(scroll.scrollTop)
  },
  onReachBottom() { 
    console.log(111)
  },
  onPullDownRefresh() {
    console.log("刷新")
  }
})