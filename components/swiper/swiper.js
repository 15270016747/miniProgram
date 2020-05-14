// components/swiper/swiper.js
Component({
  properties: {
    banner:{
      type: Array,
      value: [1,2,3,4],
      observer: (newVal,oldval) => {
        console.log(oldval)
      }
      
    }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log("home is show")
    },
    hide: function () { },
    resize: function () { },
  },
  lifetimes: {
    created() {
      console.log("swiper is create")
    },
    attached() {
      console.log("swiper is attached")
    },
    moved() {
      console.log("swiper is move")
    },
    detached() {
      console.log("swiper is detach")
    }
  }
})