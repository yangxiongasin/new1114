var hourData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
var dayData = [1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
var xAxisTextColor = '#9ea7c4'
var yAxisTextColor = '#9ea7c4'
var xAxisLineColor = '#6173A3'
var yAxisLineColor = '#6173A3'

// 今日岸电电量
var andiandianliOption = {
  backgroundColor: 'transparent',

  color: ["#2863F8", "#FF9D2A"],
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 3,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {
        type: 'line',
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
          width: 2
        }
      },
      data: hourData,
      name: '123123',
      nameLocation: 'end',
      nameTextStyle: {
        color:  'red'
      }
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}},
      min: 500
    },
  ],
  series:[
    {
      data: [],
      name: '今日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      zlevel: 1,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#174472'
          }, {
            offset: 1,
            color: '#275EE4'
          }], false),
          opacity:0.3
        }
      },
      smooth: true
    },
    {
      data: [],
      name: '昨日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fd9d46'
          }, {
            offset: 1,
            color: '#e17c37'
          }], false),
          opacity:0.3
        }
      },
      smooth: true
    }
  ]
};
// 今日岸电电量
var andiandianliangOption = {
  backgroundColor: 'transparent',

  color: ["#2863F8", "#FF9D2A"],
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 3,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {
        type: 'line',
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
          width: 2
        }
      },
      data: hourData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}},
      min: 500
    },
  ],
  series:[
    {
      data: [],
      name: '今日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      smooth: true
    },
    {
      data: [],
      name: '昨日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      smooth: true
    }
  ]
};
// 今日岸电费用
var andianfeiyongOption = {
  backgroundColor: 'transparent',
  color: ["#4DFF90", "#275EE4"],
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 3,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {
        type: 'line',
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
          width: 2
        }
      },
      data: hourData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}}
    },
  ],
  series:[
    {
      data: [],
      name: '今日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      smooth: true
    },
    {
      data: [],
      name: '昨日',
      type: 'line',
      symbol:"circle",
      symbolSize:1,
      smooth: true
    }
  ]
};
// 岸电电量
var andiandianliang_rOption = {
  backgroundColor: 'transparent',
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : {
    trigger: 'axis',
    axisPointer : { type : 'shadow'}
  },
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 0,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {type: 'none'},
      data: dayData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}}
    },
  ],
  series:[
    {
      data: [],
      barWidth: 7,
      name: '今日',
      type: 'bar',
      symbol:"circle",
      symbolSize:1,
      smooth: true,
      color: new echarts.graphic.LinearGradient(
        0, 0, 0, 1, [{
          offset: 0,
          color: '#44B238'
        },
          {
            offset: 1,
            color: '#0E723B'
          }
        ]
      )
    }
  ]
};
// 岸电费用
var andianjineOption = {
  backgroundColor: 'transparent',
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 0,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {type: 'none'},
      data: dayData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}}
    },
  ],
  series:[
    {
      data: [],
      barWidth: 7,
      name: '今日',
      type: 'bar',
      symbol:"circle",
      symbolSize:1,
      smooth: true,
      color: '#CC9819'
    }
  ]
};
// 岸电次数
var andiancishuOption = {
  backgroundColor: 'transparent',
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 0,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {type: 'none'},
      data: dayData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}}
    },
  ],
  series:[
    {
      data: [],
      barWidth: 7,
      name: '今日',
      type: 'bar',
      symbol:"circle",
      symbolSize:1,
      smooth: true,
      color: '#DA6314'
    }
  ]
};
