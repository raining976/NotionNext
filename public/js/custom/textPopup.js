/**
 * 封装文字弹出的函数
 * @param {*} arr
 * @param {*} options
 * @returns
 */
export const fnTextPopup = function (arr, options) {
    // arr参数是必须的
    if (!arr || !arr.length) {
      return
    }
    // 主逻辑
    let index = 0
    document.documentElement.addEventListener('click', function (event) {
      const x = event.pageX; const y = event.pageY
      const eleText = document.createElement('span')
      // 随机颜色
      eleText.style.color = 'rgb(' + 255 * Math.random() + ',' + 255 * Math.random() + ',' + 255 * Math.random() + ')'
      // 动画样式
      eleText.className = 'text-popup'
      this.appendChild(eleText)
      if (arr[index]) {
        eleText.innerHTML = arr[index]
      } else {
        index = 0
        eleText.innerHTML = arr[0]
      }
      // 动画结束后删除自己
      eleText.addEventListener('animationend', function () {
        eleText.parentNode.removeChild(eleText)
      })
      // 位置
      eleText.style.left = (x - eleText.clientWidth / 2) + 'px'
      eleText.style.top = (y - eleText.clientHeight) + 'px'
      // index递增
      index++
    })
  }
