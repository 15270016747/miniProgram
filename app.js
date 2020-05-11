// 注册小程序，解析app.json后执行
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("onLaunch")
    wx.getUserInfo({
      success: res => {
        console.log(res)
      }
    })
  },
  globalData:{
      name: "HWJ" ,
      age:25
  },
  onShow: function (options) {
    console.log("wx is show")
    let err = new Error()
    console.log(options.scene)//判断小程序的进入场景
  },
  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("error")
  }
})
