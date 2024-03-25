import { camelToKebab, getType } from 'utils-lite'
import { computed, h, nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

import {
  changeHandler,
  clean,
  createEventProxy,
  DEFAULT_COLORS,
  init,
  props,
  resize,
  resizeableHandler,
  STATIC_PROPS,
  themeChange
} from './render-core'

export const createChart = ({ name, chartHandler, chartLib }) => {
  return {
    name,
    props,
    setup (props, { slots, emit }) {
      let echarts = null
      const registeredEvents = []
      const _once = {}
      const _store = {}
      const _watchers = []
      let stateChangeHandler = null

      if (!changeHandler) {
        stateChangeHandler = chartLib[props.settings.type]
      } else {
        stateChangeHandler = changeHandler
      }

      const canvasStyle = computed(() => {
        return {
          width: props?.width,
          height: props?.height,
          position: 'relative'
        }
      })
      const chartColor = computed(() => {
        return (
          props?.colors ||
          (props?.theme && props?.theme.color) ||
          DEFAULT_COLORS
        )
      })

      const DataEmpty = h('div', { class: 'v-charts-data-empty' }, '暂无数据')
      const Loading = h('div', { class: 'v-charts-component-loading' }, [
        h('div', { class: 'loader' }, [
          h('div', { class: 'loading-spinner' }, [
            h(
              'svg',
              {
                class: 'circular',
                viewBox: '25 25 50 50'
              },
              [
                h('circle', {
                  class: 'path',
                  cx: '50',
                  cy: '50',
                  r: '20',
                  fill: 'none'
                })
              ]
            )
          ])
        ])
      ])

      const CANVAS = h('div', {
        style: canvasStyle.value,
        class: { 'v-charts-mask-status': props?.dataEmpty || props?.loading }
      })
      const EL = h(
        'div',
        {
          class: [camelToKebab(name)],
          style: canvasStyle.value
        },
        [
          CANVAS,
          h(DataEmpty, { style: { display: props?.dataEmpty ? '' : 'none' } }),
          h(Loading, { style: { display: props?.loading ? '' : 'none' } }),
          slots.default
        ]
      )

      const initPayload = {
        echarts,
        props,
        canvas: CANVAS.el,
        options: {
          el: EL.el,
          registeredEvents,
          chartHandler,
          chartColor: chartColor.value,
          _once,
          _store,
          readyCallback: (echarts, chartOptions, echartsLib) => {
            emit('ready', echarts, chartOptions, echartsLib)
          },
          readyOnceCallback: (echarts, chartOptions, echartsLib) => {
            emit('ready-once', echarts, chartOptions, echartsLib)
          }
        },
        nextTick
      }

      const nextTickResize = () => {
        nextTick(() =>
          resize({
            props,
            el: EL.el,
            echarts
          })
        )
      }

      watch(
        () => props?.data,
        v => {
          if (v) {
            stateChangeHandler({
              props,
              options: initPayload.options,
              echarts
            })
          }
        },
        { deep: true }
      )
      watch(
        () => props?.settings,
        v => {
          if (v.type && chartLib) chartHandler = chartLib[v.type]
          initPayload.options.chartHandler = chartLib[v.type]
          stateChangeHandler({
            props,
            options: initPayload.options,
            echarts
          })
        },
        { deep: true }
      )
      watch(
        () => props?.width,
        () => nextTickResize()
      )
      watch(
        () => props?.height,
        () => nextTickResize()
      )
      watch(
        () => props?.events,
        () =>
          createEventProxy({
            registeredEvents,
            echarts,
            props
          }),
        { deep: true }
      )
      watch(
        () => props?.theme,
        () => {
          nextTick(() => {
            initPayload.canvas = CANVAS.el
            initPayload.options.el = EL.el

            themeChange(initPayload, props)
          })
        },
        { deep: true }
      )
      watch(
        () => props?.themeName,
        () => {
          nextTick(() => {
            initPayload.canvas = CANVAS.el
            initPayload.options.el = EL.el

            themeChange(initPayload, props)
          })
        }
      )
      watch(
        () => props?.resizeable,
        resizeable => {
          nextTick(() => {
            resizeableHandler({
              resizeable,
              _once,
              props,
              el: EL.el,
              echarts
            })
          })
        }
      )

      const addWatchToProps = ({ _watchers, props, options, echarts }) => {
        const watchedVariable = _watchers.map(watcher => watcher.expression)
        Object.keys(props).forEach(prop => {
          if (!~watchedVariable.indexOf(prop) && !~STATIC_PROPS.indexOf(prop)) {
            const opts = { deep: false }
            if (
              ~['[object Object]', '[object Array]'].indexOf(
                getType(props[prop])
              )
            ) {
              opts.deep = true
            }
            watch(
              () => prop,
              () =>
                stateChangeHandler({
                  props,
                  options,
                  echarts
                }),
              opts
            )
          }
        })
      }

      onMounted(() => {
        initPayload.canvas = CANVAS.el
        initPayload.options.el = EL.el

        const { echarts: initEcharts } = init(initPayload) || {}
        echarts = initEcharts
        addWatchToProps({
          _watchers,
          props,
          options: initPayload.options,
          echarts
        })
      })

      onBeforeUnmount(() => {
        clean({
          echarts,
          props,
          _once
        })
      })

      return () => EL
    }
  }
}
