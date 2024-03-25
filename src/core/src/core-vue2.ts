import numerify from 'numerify'
import { camelToKebab, getType } from 'utils-lite'

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

export default {
  render (h) {
    return h(
      'div',
      {
        class: [
          camelToKebab(this.$options.name || this.$options._componentTag)
        ],
        style: this.canvasStyle
      },
      [
        h('div', {
          style: this.canvasStyle,
          class: { 'v-charts-mask-status': this.dataEmpty || this.loading },
          ref: 'canvas'
        }),
        h(
          'div',
          {
            class: 'v-charts-data-empty',
            style: { display: this.dataEmpty ? '' : 'none' }
          },
          '暂无数据'
        ),
        h(
          'div',
          {
            style: { display: this.loading ? '' : 'none' },
            class: 'v-charts-component-loading'
          },
          [
            h('div', { class: 'loader' }, [
              h('div', { class: 'loading-spinner' }, [
                h(
                  'svg',
                  {
                    class: 'circular',
                    attrs: { viewBox: '25 25 50 50' }
                  },
                  [
                    h('circle', {
                      class: 'path',
                      attrs: {
                        cx: '50',
                        cy: '50',
                        r: '20',
                        fill: 'none'
                      }
                    })
                  ]
                )
              ])
            ])
          ]
        ),
        this.$slots.default
      ]
    )
  },

  props,

  created () {
    this.echarts = null
    this.registeredEvents = []
    this._once = {}
    this._store = {}
    this._watchers = []
    this.initPayload = {}
  },
  data () {
    return {
      chartLib: null,
      echarts: null,
      registeredEvents: [],
      _once: {},
      _store: {},
      _watchers: [],
      initPayload: {}
    }
  },
  watch: {
    data: {
      deep: true,
      handler (v) {
        if (v) {
          changeHandler({
            props: this.$props,
            options: this.initPayload.options,
            echarts: this.echarts
          })
        }
      }
    },

    settings: {
      deep: true,
      handler (v) {
        if (v.type && this.chartLib) {
          this.chartHandler = this.chartLib[v.type]
          this.initPayload.options.chartHandler = this.chartLib[v.type]
        }
        changeHandler({
          props: this.$props,
          options: this.initPayload.options,
          echarts: this.echarts
        })
      }
    },

    width: 'nextTickResize',
    height: 'nextTickResize',

    events: {
      deep: true,
      handler () {
        createEventProxy({
          registeredEvents: this.registeredEvents,
          echarts: this.echarts,
          props: this.$props
        })
      }
    },

    theme: {
      deep: true,
      handler (val) {
        themeChange(this.initPayload, props)
      }
    },

    themeName: {
      deep: true,
      handler (val) {
        themeChange(this.initPayload, props)
      }
    },

    resizeable: {
      deep: true,
      handler (val) {
        this.$nextTick(() => {
          resizeableHandler({
            resizeable: this.resizeable,
            _once: this._once,
            props: this.$props,
            el: this.$el,
            echarts: this.echarts
          })
        })
      }
    }
  },

  computed: {
    canvasStyle () {
      return {
        width: this.width,
        height: this.height,
        position: 'relative'
      }
    },

    chartColor () {
      return this.colors || (this.theme && this.theme.color) || DEFAULT_COLORS
    }
  },
  mounted () {
    const {
      echarts,
      $props: props,
      $el: el,
      registeredEvents,
      chartHandler,
      _once,
      _store,
      $nextTick: nextTick,
      _watchers
    } = this
    const initPayload = {
      echarts,
      props,
      canvas: this.$refs.canvas,
      options: {
        el,
        registeredEvents,
        chartHandler,
        chartColor: this.chartColor,
        _once,
        _store,
        readyCallback: (echarts, chartOptions, echartsLib) => {
          this.$emit('ready', echarts, chartOptions, echartsLib)
        },
        readyOnceCallback: (echarts, chartOptions, echartsLib) => {
          this.$emit('ready-once', echarts, chartOptions, echartsLib)
        }
      },
      nextTick
    }

    const { echarts: initEcharts } = init(initPayload) || {}
    this.echarts = initEcharts
    this.initPayload = initPayload
    this.addWatchToProps({
      _watchers,
      props,
      options: initPayload.options,
      echarts: this.echarts
    })
  },
  beforeDestroy () {
    clean({
      echarts: this.echarts,
      props: this.$props,
      _once: this._once
    })
  },

  methods: {
    addWatchToProps () {
      const watchedVariable = this._watchers.map(watcher => watcher.expression)
      Object.keys(this.$props).forEach(prop => {
        if (!~watchedVariable.indexOf(prop) && !~STATIC_PROPS.indexOf(prop)) {
          const opts = { deep: false }
          if (
            ~['[object Object]', '[object Array]'].indexOf(
              getType(this.$props[prop])
            )
          ) {
            opts.deep = true
          }
          this.$watch(
            prop,
            () => {
              changeHandler({
                props: this.$props,
                options: this.initPayload.options,
                echarts: this.echarts
              })
            },
            opts
          )
        }
      })
    },
    nextTickResize () {
      this.$nextTick(
        resize({
          props: this.$props,
          el: this.$el,
          echarts: this.echarts
        })
      )
    }
  },
  _numerify: numerify
}
