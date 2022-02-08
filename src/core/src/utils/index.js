import {
  name, version
} from '../../package.json'
import numerify from 'numerify'
import { isFunction } from 'utils-lite'

export const getFormated = (val, type, digit, defaultVal = '-') => {
  if (isNaN(val)) return defaultVal
  if (!type) return val
  if (isFunction(type)) return type(val, numerify)

  digit = isNaN(digit) ? 0 : ++digit
  const digitStr = `.[${new Array(digit).join(0)}]`
  let formatter = type
  switch (type) {
  case 'KMB':
    formatter = digit ? `0,0${digitStr}a` : '0,0a'
    break
  case 'normal':
    formatter = digit ? `0,0${digitStr}` : '0,0'
    break
  case 'percent':
    formatter = digit ? `0,0${digitStr}%` : '0,0.[00]%'
    break
  }
  return numerify(val, formatter)
}

export const getStackMap = (stack) => {
  const stackMap = {}
  Object.keys(stack).forEach((item) => {
    stack[item].forEach((name) => {
      stackMap[name] = item
    })
  })
  return stackMap
}

export const $get = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    }
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText))
    }
  })
}

const mapPromise = {}

export const getMapJSON = ({
  position,
  positionJsonLink,
  beforeRegisterMapOnce,
  mapURLProfix
}) => {
  const link = positionJsonLink || `${mapURLProfix}${position}.json`
  if (!mapPromise[link]) {
    mapPromise[link] = $get(link).then((res) => {
      if (beforeRegisterMapOnce) res = beforeRegisterMapOnce(res)
      return res
    })
  }
  return mapPromise[link]
}

let bmapPromise = null
let amapPromise = null

export const getBmap = (key, v) => {
  if (!bmapPromise) {
    bmapPromise = new Promise((resolve) => {
      const callbackName = `bmap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://api.map.baidu.com/api?v=${v || '2.0'}`,
        `ak=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return bmapPromise
}

export const getAmap = (key, v) => {
  if (!amapPromise) {
    amapPromise = new Promise((resolve) => {
      const callbackName = `amap${Date.now()}`
      window[callbackName] = resolve
      const script = document.createElement('script')
      script.src = [
        `https://webapi.amap.com/maps?v=${v || '1.4.3'}`,
        `key=${key}`,
        `callback=${callbackName}`
      ].join('&')

      document.body.appendChild(script)
    })
  }
  return amapPromise
}

export function setArrayValue (arr, index, value) {
  if (arr[index] !== undefined) {
    arr[index].push(value)
  } else {
    arr[index] = [value]
  }
}

export function logCopyRight (packageName, packageVersion) {
  console.log(
    `\n %c author %c vxhly %c %c email %c <pengchengou@gmail.com> %c \n\n %c ${name} %c v${version} %c %c ${packageName} %c v${packageVersion}  \n`,
    'color: #fff; background: #5A5A5A; padding:5px;',
    'color: #fff; background: #4FC921; padding:5px;',
    "content:' '",
    'color: #fff; background: #5A5A5A; padding:5px;',
    'color: #fff;background: #1890ff; padding:5px 0;',
    "content:' '",
    'color: #fff; background: #5A5A5A; padding:5px;',
    'color: #fff;background: #E77335; padding:5px 0;',
    "content:' '",
    'color: #fff; background: #5A5A5A; padding:5px;',
    'color: #fff;background: #E77335; padding:5px 0;'
  )
}

export * from '../render-core/constants'
export * from '../render-core/install-echarts'
