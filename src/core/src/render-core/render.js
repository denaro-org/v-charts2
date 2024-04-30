import { cloneDeep, debounce, isArray, isEqual, isObject } from 'utils-lite'

import { setAnimation, setExtend, setMark } from '../modules'

import { DEFAULT_THEME, ECHARTS_SETTINGS, echartsLib } from '.'

export const init = ({ echarts, props, canvas, options } = {}) => {
  if (echarts) return
  const { registeredEvents, _once, el } = options
  const themeName = props?.themeName || props?.theme || DEFAULT_THEME
  echarts = echartsLib.init(canvas, themeName, {
    renderer: props?.renderer,
    ...props?.initOptions
  })
  if (props?.data) {
    changeHandler({
      props,
      options,
      echarts
    })
  }
  createEventProxy({
    registeredEvents,
    echarts,
    props
  })
  if (props?.resizeable) {
    addResizeListener({
      _once,
      props,
      el,
      echarts
    })
  }

  return { echarts }
}

export const changeHandler = ({ props, options, echarts } = {}) => {
  return debounce(
    dataHandler({
      props,
      options,
      echarts
    }),
    props?.changeDelay
  )
}

export const resizeHandler = ({ props, el, echarts } = {}) => {
  return debounce(
    resize({
      props,
      el,
      echarts
    }),
    props?.resizeDelay
  )
}

export const createEventProxy = ({ registeredEvents, echarts, props }) => {
  // 只要用户使用 on 方法绑定的事件都做一层代理,
  // 是否真正执行相应的事件方法取决于该方法是否仍然存在 events 中
  // 实现 events 的动态响应
  const keys = Object.keys(props?.events || {})
  keys.length &&
    keys.forEach(ev => {
      if (registeredEvents.indexOf(ev) === -1) {
        registeredEvents.push(ev)
        echarts.on(
          ev,
          (function (ev) {
            return function (...args) {
              if (ev in props.events) {
                props?.events[ev].apply(null, args)
              }
            }
          })(ev)
        )
      }
    })
}

export const addResizeListener = ({ _once, props, el, echarts }) => {
  window.addEventListener('resize', () =>
    resizeHandler({
      props,
      el,
      echarts
    })
  )
  _once.onresize = true
}

export const removeResizeListener = ({ _once }) => {
  window.removeEventListener('resize', resizeHandler)
  _once.onresize = false
}

export const dataHandler = ({ props, options, echarts } = {}) => {
  const { chartHandler, chartColor, _once } = options

  if (!chartHandler) return
  let data = props?.data
  const { columns = [], rows = [] } = data
  const extra = {
    tooltipVisible: props?.tooltipVisible,
    legendVisible: props?.legendVisible,
    echarts,
    color: chartColor,
    tooltipFormatter: props?.tooltipFormatter,
    _once
  }
  if (props?.beforeConfig && props instanceof Function)
    data = props?.beforeConfig(data)

  const chartOptions = chartHandler(columns, rows, props?.settings, extra)

  if (chartOptions) {
    if (typeof chartOptions.then === 'function') {
      chartOptions.then(res => {
        optionsHandler({
          chartOptions: res,
          props,
          options,
          echarts
        })
      })
    } else {
      optionsHandler({
        chartOptions,
        props,
        options,
        echarts
      })
    }
  }
}

export const optionsHandler = ({
  chartOptions,
  props,
  options,
  echarts,
  nextTick
}) => {
  const { chartColor, _store, _once, el, readyCallback, readyOnceCallback } =
    options
  // legend
  if (props?.legendPosition && chartOptions.legend) {
    chartOptions.legend[props?.legendPosition] = 10
    if (~['left', 'right'].indexOf(props?.legendPosition)) {
      chartOptions.legend.top = 'middle'
      chartOptions.legend.orient = 'vertical'
    }
  }
  // color
  chartOptions.color = chartColor
  // echarts self settings
  ECHARTS_SETTINGS.forEach(setting => {
    if (props?.[setting]) chartOptions[setting] = props?.[setting]
  })
  // animation
  if (props?.animation) setAnimation(chartOptions, props?.animation)
  // marks
  if (props?.markArea || props?.markLine || props?.markPoint) {
    const marks = {
      markArea: props?.markArea,
      markLine: props?.markLine,
      markPoint: props?.markPoint
    }
    const series = chartOptions.series
    if (isArray(series)) {
      series.forEach(item => {
        setMark(item, marks)
      })
    } else if (isObject(series)) {
      setMark(series, marks)
    }
  }
  // change inited echarts settings
  if (props?.extend) setExtend(chartOptions, props?.extend)
  if (props?.afterConfig && props?.afterConfig instanceof Function)
    chartOptions = props?.afterConfig(chartOptions)
  let setOptionOpts = props?.setOptionOpts
  // map chart not merge
  if (
    (props?.settings.bmap || props?.settings.amap) &&
    !isObject(setOptionOpts)
  ) {
    setOptionOpts = false
  }
  // exclude unchange options
  if (props?.notSetUnchange && props?.notSetUnchange.length) {
    props?.notSetUnchange.forEach(item => {
      const value = chartOptions[item]
      if (value) {
        if (isEqual(value, _store[item])) {
          chartOptions[item] = undefined
        } else {
          _store[item] = cloneDeep(value)
        }
      }
    })
    if (isObject(setOptionOpts)) {
      setOptionOpts.notMerge = false
    } else {
      setOptionOpts = false
    }
  }

  if (props?.log) console.log(chartOptions)
  if (!echarts) throw new Error('echarts is not defined')

  echarts.setOption(chartOptions, setOptionOpts)
  readyCallback instanceof Function &&
    readyCallback(echarts, chartOptions, echartsLib)
  if (!_once['ready-once']) {
    _once['ready-once'] = true
    readyOnceCallback instanceof Function &&
      readyOnceCallback(echarts, chartOptions, echartsLib)
  }
  if (props?.judgeWidth) {
    judgeWidthHandler({
      props,
      el,
      nextTick,
      echarts
    })
  }
  if (props?.afterSetOption && props?.afterSetOption instanceof Function) {
    props?.afterSetOption(echarts, chartOptions, echartsLib)
  }
  if (props?.afterSetOptionOnce && !_once.afterSetOptionOnce) {
    _once.afterSetOptionOnce = true
    if (props?.afterSetOptionOnce instanceof Function)
      props?.afterSetOptionOnce(echarts, chartOptions, echartsLib)
  }
}

export const judgeWidthHandler = ({ props, el, nextTick, echarts }) => {
  if (el.clientWidth || el.clientHeight) {
    resize({
      props,
      el,
      echarts
    })
  } else {
    nextTick(() => {
      if (el.clientWidth || el.clientHeight) {
        resize({
          props,
          el,
          echarts
        })
      } else {
        setTimeout(() => {
          resize({
            props,
            el,
            echarts
          })
          if (!el.clientWidth || !el.clientHeight) {
            console.warn(" Can't get dom width or height ")
          }
        }, props?.widthChangeDelay)
      }
    })
  }
}

export const resize = ({ props, el, echarts } = {}) => {
  if (!props?.cancelResizeCheck) {
    if (el && el.clientWidth && el.clientHeight) {
      echartsResize(echarts)
    }
  } else {
    echartsResize(echarts)
  }
}

export const echartsResize = echarts => {
  echarts && echarts.resize()
}

export const themeChange = (initPayload, props) => {
  let {
    echarts,
    options: { _once }
  } = initPayload
  clean({
    echarts,
    props,
    _once
  })
  echarts = null
  init(initPayload)
}

export const clean = ({ echarts, props, _once }) => {
  if (props?.resizeable) {
    removeResizeListener({ _once })
  }
  echarts && echarts.dispose()
}

export const resizeableHandler = ({
  resizeable,
  _once,
  props,
  el,
  echarts
}) => {
  if (resizeable && !_once.onresize) {
    addResizeListener({
      _once,
      props,
      el,
      echarts
    })
  }
  if (!resizeable && _once.onresize) {
    removeResizeListener({ _once })
  }
}
