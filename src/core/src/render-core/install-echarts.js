// 引入 echarts 的核心库
// 引入提示框,标题,直角坐标系,数据集,内置数据转换器组件,组件后缀都为 Component
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent
} from 'echarts/components'
import * as echartsLib from 'echarts/core'
// 标签自动布局,全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器,注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'

echartsLib.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  CanvasRenderer,
  LegendComponent
])

export { echartsLib }
