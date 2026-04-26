// pages/login/login.js
import api from '../../utils/api';

Page({

  data: { code: '' },

  onInputCode(e) {
    this.setData({ code: e.detail.value });
  },

  login() {
    wx.login({
      success: async (res) => {
        try {
          const result = await api.wechatLogin(res.code);
          if (result.token) {
            wx.setStorageSync('token', result.token);
            wx.navigateBack(); // 返回上一个页面（我的页面）
          }
        } catch (err) {
          wx.showToast({ title: '登录失败', icon: 'none' });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})