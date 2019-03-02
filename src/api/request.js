import { baseUrl } from './config';
export function request(url, method = 'GET', data, header = { 'Content-Type': 'json' }) {
  return new Promise((resolve, reject) => {
    wx.showLoading({ title: '玩命加载中...' })
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header,
      success: function (res) {
        if (res.statusCode === 200) {

          resolve(res.data)
        } else {
          console.log('发生未知错误!')
          reject(res.data)
        }
      },
      fail: function () {
        console.log('获取数据失败!')
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}