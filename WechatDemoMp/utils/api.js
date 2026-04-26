// utils/api.js
const BASE_URL = 'https://localhost:7001/api'; // .NET API 地址

function request(url, method = 'GET', data = {}, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method,
      data,
      header,
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}

function wechatLogin(code) {
  return request('/auth/wechat-login', 'POST', { code });
}

function getMe(token) {
  return request('/user/me', 'GET', {}, { Authorization: 'Bearer ' + token });
}

export default {
  request,
  wechatLogin,
  getMe
};
