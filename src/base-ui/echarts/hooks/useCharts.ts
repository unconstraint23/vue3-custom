import * as echarts from 'echarts'
import chinaMapData from './data/china.json'
echarts.registerMap('china', chinaMapData)
export default function(el:HTMLElement) {
    const echartInstance = echarts.init(el)
    const setOptions = (opt: echarts.EChartsOption) => {
      echartInstance.setOption(opt)
    }

    const updateSize = () => {
      echartInstance.resize()
    }

    window.addEventListener('resize', () => {
      echartInstance.resize()
    })
    return {
      echartInstance,
      setOptions,
      updateSize
    }
}
