// 友情提示
export function showFriendlyTips(msg) {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title: "友情提示",
      content: msg,
      showCancel: false,
      success: resolve,
      fail: reject,
    });
  });
}


/**
 *对showToast 封装
 */
 export function showToast(title, options={}) {
  return new Promise((resolve, reject) => {
    uni.showToast({
      title,
      duration: 1500,
      icon: 'none',
      ...options,
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
    })
  })
}


// 打电话
export function callPhone(phone) {
  uni.makePhoneCall({
    phoneNumber: phone,
  })
}
// 字符串到数组
export function strToArr(str, symbol = ',') {
  if (typeof str === 'string') {
    return str.split(symbol)
  }
  return []
}
// 数组到字符串
export function arrToStr(arr, symbol = ',') {
  if (Array.isArray(arr)) {
    return arr.join(symbol)
  }
  return ''
}
