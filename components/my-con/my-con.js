// components/my-con/my-con.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "按钮",
      observe: function(newVal,oldVal) {
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses: ['title-class'], 
  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      this.triggerEvent("change",{name: 'hwj',age:'25'},{})
    }
  }
})
