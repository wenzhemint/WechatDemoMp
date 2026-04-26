// pages/me/me.js
import api from '../../utils/api';

Page({
  data: {
    userInfo: null
  },

  onShow() {
    const token = wx.getStorageSync('token');
    if (!token) {
      this.setData({
        userInfo: null
      });
      wx.navigateTo({ url: '/pages/login/login' });
    } else {
      this.loadUserInfo(token);
    }
  },

  async loadUserInfo(token) {
    try {
      const res = await api.getMe(token);
      console.log(res);
      this.setData({ userInfo: res });
    } catch (err) {
      this.setData({ userInfo: null });
      wx.showToast({ title: '获取用户信息失败', icon: 'none' });
    }
  },

  logout() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 1. 清除 token
          wx.removeStorageSync('token');
          // 2. 清除用户信息
          wx.removeStorageSync('userInfo');
          // 3. 重置页面 data 状态
          this.setData({
            username: null
          });
          // 4. 返回首页
          wx.switchTab({ url: '/pages/index/index' });
        }
      }
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

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