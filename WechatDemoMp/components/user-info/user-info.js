// components/user-info.js
Component({

  /**
   * Component properties
   */
  properties: {
    userinfo: {
      type: Object,
      value: null
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {

  },
  lifetimes: {
    attached() {
      console.log('组件 attached，userinfo:', this.data.userinfo);
    }
  },

  observers: {
    'userinfo': function(newVal) {
      console.log('userinfo 更新了:', newVal);
    }
  }
})