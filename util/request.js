const BESTURL = 'http://121.36.172.234:8085'
export default function (config) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BESTURL + config.url,
      method: config.method || 'post' ,
      header: config.header || {
        "content-type": "application/x-www-form-urlencoded",
        // "cookie": "JSESSIONID=" + wx.getStorageSync('sessionId')
      },
      data: config.data || {},
      success: resolve,
      fail: reject
    })
  })
}