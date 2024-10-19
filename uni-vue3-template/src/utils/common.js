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
