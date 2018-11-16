var hourData = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32]
var xAxisTextColor = '#9ea7c4'
var yAxisTextColor = '#9ea7c4'
var xAxisLineColor = '#6173A3'
var yAxisLineColor = '#6173A3'
// 今日岸电电量
var yongdianqingkuangOption = {
  backgroundColor: 'transparent',

  color: ["#35AE40"],
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 0,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {type: 'none'},
      data: hourData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}},
    },
  ],
  series:[
    {
      data: [],
      name: '今日',
      type: 'line',
      symbol:"circle",
      symbolSize:3
    }
  ]
};
// 今日岸电电量
var mouthUserpowerOption = {
  backgroundColor: 'transparent',

  color: ["#35AE40"],
  grid: {left: '2%',top:"12%",bottom: "5%",right:"5%",containLabel: true},
  tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
  xAxis: [
    {
      type: 'category',
      axisLine: { show: true,lineStyle:{ color: xAxisLineColor }},
      axisLabel:{interval: 0,textStyle:{color: xAxisTextColor,fontSize:12} },
      axisTick : {show: false},
      axisPointer : {type: 'none'},
      data: hourData,
    },
  ],
  yAxis: [
    {
      axisTick : {show: false},
      splitLine: {show:false},
      axisLabel:{textStyle:{color: yAxisTextColor,fontSize:14} },
      axisLine: { show: true,lineStyle:{ color: yAxisLineColor}},
    },
  ],
  series:[
    {
      data: [],
      name: '今日',
      type: 'line',
      symbol:"circle",
      symbolSize:3
    }
  ]
};