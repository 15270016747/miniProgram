// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    nowTime: new Date().toLocaleString(),
    isActive:false,
    messageList:['hwj','xt','2020'],
    count:0,
    isCreate: true
  },
  handleMeaaageTap(e) {
    console.log(e)
    const dataset = e.currentTarget.dataset
    console.log(dataset)
  },
  handleChange(e) {
    console.log(e)
    this.setData({
      count: ++this.data.count
    })
  },
  isCreate() {

  },
  toRed(e) {
    this.setData({
      isActive: !this.data.isActive,
      isCreate: !this.data.isCreate
    })
    const tab = this.selectComponent("#tab")
    tab.incrementCount()
    
  },
  handleTouchmove(e) {
    // console.log(e)
  },
  handletagclick(e) {
    console.log(e.detail.index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://152.136.185.210:8000/api/n3/home/multidata",
      success: res => {
        let banner = res.data.data.banner.list
        this.setData({
          banner
        })
        console.log(banner)
      }
    })
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
    console.log(this)
  },
  handleInput() {
    console.log(1111)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})