// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: {
      type: Array,
      value: [1,2,3],
      abserver: function() {

      }
    }
  },
  data: {
    count: 0,
    activeindex: 0
  },
  methods: {
    handleActive(event) {
      // console.log(event)
      // console.log(111)
      let index = event.currentTarget.dataset.index
      this.setData({
        activeindex: index
      })
      this.triggerEvent("handletagclick",{index:index},{})
    },
    incrementCount() {
      this.setData({
        count: ++this.data.count
      })
    }
  },
  pageLifetimes: {
    show() {
      console.log(111)
    }
  }
})
