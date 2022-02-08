export const props = {
  data: {
    type: [Object, Array],
    default () {
      return {}
    }
  },
  settings: {
    type: Object,
    default () {
      return {}
    }
  },
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: '400px'
  },
  beforeConfig: { type: Function },
  afterConfig: { type: Function },
  afterSetOption: { type: Function },
  afterSetOptionOnce: { type: Function },
  events: { type: Object },
  grid: { type: [Object, Array] },
  colors: { type: Array },
  tooltipVisible: {
    type: Boolean,
    default: true
  },
  legendVisible: {
    type: Boolean,
    default: true
  },
  legendPosition: { type: String },
  markLine: { type: Object },
  markArea: { type: Object },
  markPoint: { type: Object },
  visualMap: { type: [Object, Array] },
  dataZoom: { type: [Object, Array] },
  toolbox: { type: [Object, Array] },
  initOptions: {
    type: Object,
    default () {
      return {}
    }
  },
  title: [Object, Array],
  legend: [Object, Array],
  xAxis: [Object, Array],
  yAxis: [Object, Array],
  radar: Object,
  tooltip: Object,
  axisPointer: [Object, Array],
  brush: [Object, Array],
  geo: [Object, Array],
  timeline: [Object, Array],
  graphic: [Object, Array],
  series: [Object, Array],
  backgroundColor: [Object, String],
  textStyle: [Object, Array],
  animation: Object,
  theme: Object,
  themeName: String,
  loading: Boolean,
  dataEmpty: Boolean,
  extend: Object,
  judgeWidth: {
    type: Boolean,
    default: false
  },
  widthChangeDelay: {
    type: Number,
    default: 300
  },
  tooltipFormatter: { type: Function },
  resizeable: {
    type: Boolean,
    default: true
  },
  resizeDelay: {
    type: Number,
    default: 200
  },
  changeDelay: {
    type: Number,
    default: 0
  },
  setOptionOpts: {
    type: [Boolean, Object],
    default: true
  },
  cancelResizeCheck: Boolean,
  notSetUnchange: Array,
  log: Boolean,
  renderer: {
    type: String,
    default: 'canvas',
    validator: (val) => {
      return ['svg', 'canvas'].indexOf(val) > -1
    }
  }
}
