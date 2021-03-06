// @ts-check

const toastr = require('toastr')

const sensibles = [
  /(姓名|名字|班级|教学班|行政班)[\s]*([(（].+[)）])?[\s]*(:|：)?$/
]

/**
 * @param {string} text
 */
function isSensible (text) {
  text = text.trim()
  return sensibles.some(r => r.test(text))
}

function deleteAllCookies () {
  document.cookie.split(';')
    .forEach(function (c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
    })
}

function randWord () {
  const list = [
    '习卷江胡', '苟利国家', '谈笑风生', '垂死病中',
    '螳臂当车', '庆丰大帝', '小熊维尼', '州长夫人',
    '毛病百出', '积恶成习', '无可奉告', '另请高明',
    '亦可赛艇', '香港记者', '传统艺能', '会堂红歌',
    '锦城风光', '捌玖陆肆', '图样森破', '身经百战',
    '改革春风', '借你吉言', '火钳刘明', '影流之主',
    '蜜汁汉堡', '祖安钢琴', '下次一定', '你币没了',
    '金色传说', '十连保底', '阿伟死了', '吉良吉影',
    '副本零掉', '文艺复兴', '杰哥不要', '光头吴克',
    '男上加男', '强人锁男', '汉流夹背', '大汉淋漓',
    '淡黄长裙', '蓬松头发', '牵我的手', '展出油画',
    '接头霸王', '天火自裁', '清洁甲板', '空中劈叉'
  ]
  return list[Math.floor(Math.random() * list.length)]
}

function randIP () {
  const r = () => Math.floor(Math.random() * 254) + 1
  return `${r()}.${r()}.${r()}.${r()}`
}

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function wait (ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

/**
 * @param {number} ms
 * @param {string} msg
 * @param {string} title
 * @returns {Promise<void>}
 */
function waitWithToast (ms, msg, title) {
  return new Promise((resolve) => {
    toastr.warning(msg, title, {
      tapToDismiss: false,
      timeOut: ms,
      closeOnHover: false,
      progressBar: true,
      onHidden: () => resolve()
    })
  })
}

module.exports = {
  isSensible,
  deleteAllCookies,
  randWord,
  randIP,
  wait,
  waitWithToast
}
