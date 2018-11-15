/**
 * 设置canvas遮罩层
 */
function setCanvasLayer(){
  var canvas = document.getElementById('layerCanvas');
  var cxt = canvas.getContext('2d');
  cxt.beginPath();
  cxt.arc(257, 222, 300, 0, Math.PI, false);
  cxt.fillStyle = "#041f30";
  cxt.fill();//画实心圆
  cxt.closePath();
  //绘制虚线
  cxt.setLineDash([10, 5]);
  cxt.lineWidth = 2;
  cxt.strokeStyle = '#728b0e';
  cxt.beginPath();
  cxt.moveTo(0, 222);
  cxt.lineTo(514, 222);
  cxt.stroke();
}

// setCanvasLayer();



/**
 *  * 各个设备功率曲线图绘制函数
 * @param id 待绘制的canvas id
 * @param strokeColor 绘制线颜色
 * @param arrOjb 绘制点集合，格式示例：[{x: 0, y: 10}, {x: 10, 20}],x：点的横坐标值，y：点的纵坐标值
 * @param height canvas高度
 */
function getPowerLine(id, strokeColor, arrOjb, height){
  var cxt = devicePowerArr[id]['instance'], index = devicePowerArr[id]['index'], powerValue = 0;
  cxt.strokeStyle = strokeColor;
  if(index == 0){
    powerValue = arrOjb[index]['value'];
    var y = arrOjb[index]['value'] / (500 / height);
    cxt.moveTo(arrOjb[index]['key'], y);
  }else if(index < 60) {
    powerValue = arrOjb[index]['value'];
    var y = arrOjb[index]['value'] / (500 / height);
    cxt.lineTo(arrOjb[index]['key'], y);
  }else{
    var temp = index % 60;
    powerValue = arrOjb[temp]['value'];
    var x = arrOjb[59]['key'] + (index - 60) * 5;
    var y = arrOjb[temp]['value'] / (500 / height);
    cxt.lineTo(x, y);
  }
  index++;
  if(index > 14){
    document.getElementById(id).style.MozTransform = 'translateX(-' + (index * 5 - 70) + 'px)';
    document.getElementById(id).style.OTransform = 'translateX(-' + (index * 5 - 70) + 'px)';
    document.getElementById(id).style.msTransform = 'translateX(-' + (index * 5 - 70) + 'px)';
    document.getElementById(id).style.webkitTransform = 'translateX(-' + (index * 5 - 70) + 'px)';
    document.getElementById(id).style.transform = 'translateX(-' + (index * 5 - 70) + 'px)';
  }
  document.getElementById(id + 'Current').innerText = powerValue;
  devicePowerArr[id]['index'] = index;
  cxt.stroke();
}

/**
 * 设备功率绘制
 */
var stlDevicePowerData1 = setInterval("getPowerLine('powerValue168471', '#2995bf', devicePowerData1, 25)", 1000);
var stlDevicePowerData2 = setInterval("getPowerLine('powerValue168472', '#2995bf', devicePowerData2, 25)", 1000);
var stlDevicePowerData3 = setInterval("getPowerLine('powerValue168473', '#2995bf', devicePowerData3, 25)", 1000);
var stlDevicePowerData4 = setInterval("getPowerLine('powerValue168474', '#2995bf', devicePowerData4, 25)", 1000);
var stlDevicePowerData5 = setInterval("getPowerLine('powerValue168475', '#2995bf', devicePowerData5, 25)", 1000);
var stlDevicePowerData6 = setInterval("getPowerLine('powerValue168476', '#2995bf', devicePowerData6, 25)", 1000);

/**
 * 设置港口地图
 */
function getPortMap(){
  var map = new AMap.Map('portMap',{
    mapStyle: 'amap://styles/blue', //设置地图的显示样式
    zoom: 10,
    center: [110.981247, 30.847664]
  });

  var marker = new AMap.Marker({
    position: [110.981247, 30.847664],
    content: '<div><img src="../img/port_ship.png" width="12"></div>',
    offset: new AMap.Pixel(0, 0)
  });
  marker.setMap(map);
  var text = new AMap.Text({
    text:'秭归港口站',
    textAlign:'right', // 'left' 'right', 'center',
    verticalAlign:'middle', //middle 、bottom
    style:{
      'color': '#fff',
      'background-color':'transparent',
      'border':'solid 1px transparent',
      'padding':'0',
      'transform': 'scale(0.8)'
    },
    position: [110.981247, 30.847664]
  });
  text.setMap(map);
}

getPortMap();

// 弹窗
var iconWork = document.getElementsByClassName('icon-work');
var circleModal = document.getElementsByClassName('circle-modal')[0];
for (var i = 0; i < iconWork.length; i++) {
  iconWork[i].onclick = function(e) {
    circleModal.style.display = 'block';
    circleModal.style.marginLeft = parseInt(e.target.id) * 78 + 'px';
    getModalChart();
  };
}

document.getElementsByTagName('body')[0].onclick = function(e) {
  var flag;
  for (var i = 0; i < e.path.length; i++) {
    if (e.path[i].className == 'circle-modal') {
      flag = true;
    }
  }
  if (e.target.className != 'icon-charge-size icon-work' && !flag) {
    circleModal.style.display = 'none';
  }
}

function getModalChart() {
  var modalChart = echarts.init(document.getElementById('modalChart'));

  var option = {
    color: ['#28A2F8', '#3ABDA5', '#285FE6', '#FF9D2A'],
    title: {
      text: '今日运营情况',
      textStyle:{
        fontSize:12,
        color: '#FFF'
      },
      top: 12,
      left: 177
    },
    tooltip: {                          // 提示框组件
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        lineStyle: {
          width: 2,
          color: 'rgba(255, 255, 255, 0.3)'
        }
      },
      formatter: function(params) {
        var tooltipHtml = '时段：'+ params[0].axisValueLabel +'</br>';

        for (var i = 0; i < params.length; i++) {
          tooltipHtml += '<div class="tooltip-circle" style="background-color: '+ params[i].color +';"></div>' + params[i].seriesName + '：' + params[i].value;
          if(i == 3) {
            tooltipHtml += 'kW';
          } else {
            tooltipHtml += 'A';
          }
          tooltipHtml += '<br/>';
        }

        return tooltipHtml
      }
    },
    legend: {
      data: [{
        name: '功率',
        icon: 'rect',
        textStyle: {
          padding: [0, 195, 0, 0]
        }
      }, {
        name: 'la',
        icon: 'rect'
      }, {
        name: 'lb',
        icon: 'rect'
      }, {
        name: 'lc',
        icon: 'rect'
      }],
      left: 33,
      top: 40,
      itemGap: 20,
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: 'rgba(213,226,243,1)'
      }
    },
    grid: {
      left: 30,
      right: 36,
      top: 100,
      bottom: 22,
      containLabel: true,
      show: false                 // 网格边框是否显示，上和右边框
    },
    xAxis: {
      name: '（时段）',
      nameTextStyle: {
        color: 'rgba(213,226,243,1)',
        padding: [36, 0, 0, -10]
      },
      type: 'category',
      boundaryGap: false,          // 坐标轴两边留白
      splitLine: {                // 网格线 x轴对应的是否显示
        show: false
      },
      axisTick: {
        lineStyle: {
          color: 'rgba(119,157,212, 0.2)'
        }
      },
      axisLabel: {
        margin: 12,
        color: 'rgba(213,226,243,1)'
      },
      axisLine: {
        lineStyle: {
          color: '#779DD4'
        }
      },
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
    },
    yAxis: [{
      name: '功率（kW）',
      type: 'value',
      nameTextStyle: {
        color: 'rgba(213,226,243,1)'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(71,101,142, 0.2)'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: 'rgba(255,255,255,0.04)'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(213,226,243,1)',
        formatter: '{value}'
      },
      axisLine: {
        lineStyle: {
          color: '#779DD4'
        }
      },
      min:0,
      max: 500
    }, {
      name: '电流（A）',
      type: 'value',
      nameTextStyle: {
        color: 'rgba(213,226,243,1)',
        padding: [0, -20, 0, 0]
      },
      splitLine: {                // 网格线 y轴对应的是否显示
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: 'rgba(213,226,243,1)'
      },
      axisLine: {
        lineStyle: {
          color: '#779DD4'
        }
      },
      min:0,
      max: 250
    }],
    series: [
      {
        name: 'la',
        type: 'line',
        yAxisIndex: 1,              // yAxisIndex 1 表示第二个y轴，默认为0
        showSymbol: false,
        symbolSize: 5,
        symbol: 'image://../img/circle-blue.svg',
        smooth: true,
        lineStyle: {
          width: 1.5
        },
        data: [159, 146, 131, 128, 132, 144, 172, 164, 152, 172, 198, 163, 142, 163, 153, 155, 172, 189, 143, 122, 135, 142, 188, 172, 158]
      },
      {
        name: 'lb',
        type: 'line',
        yAxisIndex: 1,              // yAxisIndex 1 表示第二个y轴，默认为0
        showSymbol: false,
        symbolSize: 5,
        symbol: 'image://../img/circle-green.svg',
        smooth: true,
        lineStyle: {
          width: 1.5
        },
        data: [136, 124, 133, 145, 152, 164, 152, 134, 142, 182, 148, 173, 192, 163, 173, 182, 192, 185, 163, 172, 145, 132, 158, 142, 138]
      },
      {
        name: 'lc',
        type: 'line',
        yAxisIndex: 1,              // yAxisIndex 1 表示第二个y轴，默认为0
        showSymbol: false,
        symbolSize: 5,
        symbol: 'image://../img/circle-blue2.svg',
        smooth: true,
        lineStyle: {
          width: 1.5
        },
        data: [167, 186, 151, 178, 142, 124, 162, 184, 192, 182, 198, 153, 162, 183, 173, 175, 178, 189, 163, 162, 153, 192, 168, 142, 152]
      },
      {
        name: '功率',
        type: 'line',
        showSymbol: false,
        symbol: 'image://../img/circle-yellow.svg',
        smooth: true,
        symbolSize: 5,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(253, 157, 70, 1)'
            }, {
              offset: 0.8,
              color: 'rgba(225, 124, 55, 0.2)'
            }, {
              offset: 1,
              color: 'rgba(19, 43, 77, 0.1)'
            }], false),
          }
        },
        data: [24, 26, 40, 63, 103, 143, 154, 146, 134, 126, 120, 172, 220, 280, 263, 248, 200, 140, 130, 136, 148, 153, 115, 112, 104]
      }
    ]
  };

  modalChart.setOption(option);
}

// 重置页面body大小
var resetSize = () => {
  var screenWidth = window.screen.width,
    screenHeight = window.screen.height,
    bodyWidth = $('body').width(),
    bodyHeight = $('body').height(),
    widthScale = screenWidth / bodyWidth,
    heightScale = screenHeight / bodyHeight,
    leftval = bodyWidth/2 * (1-widthScale),
    // topval = bodyHeight/2 * (1-heightScale);
    topval = bodyHeight/2 * (1-widthScale);
  $('body').css({
    'transform' : 'scale(' + widthScale + ', ' + widthScale + ')',
    'margin-left': -leftval,
    'margin-top': -topval
  })
}

resetSize();

var devicePowerArr = {
  'powerValue168471': {
    index: 0,
    instance: null
  },
  'powerValue168472': {
    index: 0,
    instance: null
  },
  'powerValue168473': {
    index: 0,
    instance: null
  },
  'powerValue168474': {
    index: 0,
    instance: null
  },
  'powerValue168475': {
    index: 0,
    instance: null
  },
  'powerValue168476': {
    index: 0,
    instance: null
  }
}

//初始化canvas
Object.keys(devicePowerArr).forEach(function(v, i){
  var canvas = document.getElementById(v);
  var cxt = canvas.getContext("2d");
  cxt.lineWidth = 0.5;
  devicePowerArr[v]['instance'] = cxt;
});

//设备1功率数据
var devicePowerData1 = [
  {
    key: 0,
    value: 160
  }, {
    key: 5,
    value: 220
  }, {
    key: 10,
    value: 231
  }, {
    key: 15,
    value: 265
  }, {
    key: 20,
    value: 289
  }, {
    key: 25,
    value: 190
  }, {
    key: 30,
    value: 200
  }, {
    key: 35,
    value: 205
  }, {
    key: 40,
    value: 209
  }, {
    key: 45,
    value: 190
  }, {
    key: 50,
    value: 280
  }, {
    key: 55,
    value: 302
  }, {
    key: 60,
    value: 310
  }, {
    key: 65,
    value: 249
  }, {
    key: 70,
    value: 178
  }, {
    key: 75,
    value: 152
  }, {
    key: 80,
    value: 169
  }, {
    key: 85,
    value: 180
  }, {
    key: 90,
    value: 189
  }, {
    key: 95,
    value: 221
  }, {
    key: 100,
    value: 254
  }, {
    key: 105,
    value: 230
  }, {
    key: 110,
    value: 289
  }, {
    key: 115,
    value: 290
  }, {
    key: 120,
    value: 286
  }, {
    key: 125,
    value: 267
  }, {
    key: 130,
    value: 245
  }, {
    key: 135,
    value: 280
  }, {
    key: 140,
    value: 295
  }, {
    key: 145,
    value: 265
  }, {
    key: 150,
    value: 256
  }, {
    key: 155,
    value: 255
  }, {
    key: 160,
    value: 245
  }, {
    key: 165,
    value: 250
  }, {
    key: 170,
    value: 269
  }, {
    key: 175,
    value: 247
  }, {
    key: 180,
    value: 256
  }, {
    key: 185,
    value: 190
  }, {
    key: 190,
    value: 189
  }, {
    key: 195,
    value: 189
  }, {
    key: 200,
    value: 190
  }, {
    key: 205,
    value: 198
  }, {
    key: 210,
    value: 189
  }, {
    key: 215,
    value: 109
  }, {
    key: 220,
    value: 190
  }, {
    key: 225,
    value: 220
  }, {
    key: 230,
    value: 226
  }, {
    key: 235,
    value: 257
  }, {
    key: 240,
    value: 280
  }, {
    key: 245,
    value: 356
  }, {
    key: 250,
    value: 189
  }, {
    key: 255,
    value: 190
  }, {
    key: 265,
    value: 277
  }, {
    key: 270,
    value: 265
  }, {
    key: 275,
    value: 266
  }, {
    key: 280,
    value: 277
  }, {
    key: 285,
    value: 200
  }, {
    key: 290,
    value: 277
  }, {
    key: 295,
    value: 135
  }, {
    key: 300,
    value: 189
  }
];
//设备2功率数据
var devicePowerData2 = [
  {
    key: 0,
    value: 178
  }, {
    key: 5,
    value: 189
  }, {
    key: 10,
    value: 256
  }, {
    key: 15,
    value: 245
  }, {
    key: 20,
    value: 236
  }, {
    key: 25,
    value: 234
  }, {
    key: 30,
    value: 226
  }, {
    key: 35,
    value: 267
  }, {
    key: 40,
    value: 257
  }, {
    key: 45,
    value: 248
  }, {
    key: 50,
    value: 289
  }, {
    key: 55,
    value: 290
  }, {
    key: 60,
    value: 245
  }, {
    key: 65,
    value: 267
  }, {
    key: 70,
    value: 320
  }, {
    key: 75,
    value: 332
  }, {
    key: 80,
    value: 298
  }, {
    key: 85,
    value: 245
  }, {
    key: 90,
    value: 215
  }, {
    key: 95,
    value: 276
  }, {
    key: 100,
    value: 289
  }, {
    key: 105,
    value: 324
  }, {
    key: 110,
    value: 189
  }, {
    key: 115,
    value: 109
  }, {
    key: 120,
    value: 190
  }, {
    key: 125,
    value: 239
  }, {
    key: 130,
    value: 218
  }, {
    key: 135,
    value: 234
  }, {
    key: 140,
    value: 11
  }, {
    key: 145,
    value: 187
  }, {
    key: 150,
    value: 198
  }, {
    key: 155,
    value: 231
  }, {
    key: 160,
    value: 213
  }, {
    key: 165,
    value: 213
  }, {
    key: 170,
    value: 234
  }, {
    key: 175,
    value: 321
  }, {
    key: 180,
    value: 234
  }, {
    key: 185,
    value: 189
  }, {
    key: 190,
    value: 198
  }, {
    key: 195,
    value: 189
  }, {
    key: 200,
    value: 190
  }, {
    key: 205,
    value: 232
  }, {
    key: 210,
    value: 189
  }, {
    key: 215,
    value: 198
  }, {
    key: 220,
    value: 223
  }, {
    key: 225,
    value: 289
  }, {
    key: 230,
    value: 278
  }, {
    key: 235,
    value: 256
  }, {
    key: 240,
    value: 265
  }, {
    key: 245,
    value: 256
  }, {
    key: 250,
    value: 265
  }, {
    key: 255,
    value: 265
  }, {
    key: 265,
    value: 256
  }, {
    key: 270,
    value: 251
  }, {
    key: 275,
    value: 245
  }, {
    key: 280,
    value: 235
  }, {
    key: 285,
    value: 295
  }, {
    key: 290,
    value: 286
  }, {
    key: 295,
    value: 267
  }, {
    key: 300,
    value: 266
  }
];
//设备3功率数据
var devicePowerData3 = [
  {
    key: 0,
    value: 213
  }, {
    key: 5,
    value: 245
  }, {
    key: 10,
    value: 287
  }, {
    key: 15,
    value: 256
  }, {
    key: 20,
    value: 245
  }, {
    key: 25,
    value: 265
  }, {
    key: 30,
    value: 213
  }, {
    key: 35,
    value: 189
  }, {
    key: 40,
    value: 198
  }, {
    key: 45,
    value: 199
  }, {
    key: 50,
    value: 167
  }, {
    key: 55,
    value: 189
  }, {
    key: 60,
    value: 234
  }, {
    key: 65,
    value: 278
  }, {
    key: 70,
    value: 298
  }, {
    key: 75,
    value: 267
  }, {
    key: 80,
    value: 267
  }, {
    key: 85,
    value: 287
  }, {
    key: 90,
    value: 267
  }, {
    key: 95,
    value: 324
  }, {
    key: 100,
    value: 309
  }, {
    key: 105,
    value: 298
  }, {
    key: 110,
    value: 321
  }, {
    key: 115,
    value: 256
  }, {
    key: 120,
    value: 245
  }, {
    key: 125,
    value: 234
  }, {
    key: 130,
    value: 276
  }, {
    key: 135,
    value: 234
  }, {
    key: 140,
    value: 289
  }, {
    key: 145,
    value: 265
  }, {
    key: 150,
    value: 213
  }, {
    key: 155,
    value: 231
  }, {
    key: 160,
    value: 265
  }, {
    key: 165,
    value: 218
  }, {
    key: 170,
    value: 267
  }, {
    key: 175,
    value: 209
  }, {
    key: 180,
    value: 221
  }, {
    key: 185,
    value: 98
  }, {
    key: 190,
    value: 268
  }, {
    key: 195,
    value: 231
  }, {
    key: 200,
    value: 234
  }, {
    key: 205,
    value: 255
  }, {
    key: 210,
    value: 267
  }, {
    key: 215,
    value: 213
  }, {
    key: 220,
    value: 243
  }, {
    key: 225,
    value: 289
  }, {
    key: 230,
    value: 256
  }, {
    key: 235,
    value: 231
  }, {
    key: 240,
    value: 245
  }, {
    key: 245,
    value: 267
  }, {
    key: 250,
    value: 213
  }, {
    key: 255,
    value: 289
  }, {
    key: 265,
    value: 278
  }, {
    key: 270,
    value: 234
  }, {
    key: 275,
    value: 278
  }, {
    key: 280,
    value: 234
  }, {
    key: 285,
    value: 189
  }, {
    key: 290,
    value: 189
  }, {
    key: 295,
    value: 189
  }, {
    key: 300,
    value: 167
  }
];
//设备4功率数据
var devicePowerData4 = [
  {
    key: 0,
    value: 178
  }, {
    key: 5,
    value: 190
  }, {
    key: 10,
    value: 213
  }, {
    key: 15,
    value: 234
  }, {
    key: 20,
    value: 256
  }, {
    key: 25,
    value: 256
  }, {
    key: 30,
    value: 276
  }, {
    key: 35,
    value: 213
  }, {
    key: 40,
    value: 289
  }, {
    key: 45,
    value: 234
  }, {
    key: 50,
    value: 245
  }, {
    key: 55,
    value: 267
  }, {
    key: 60,
    value: 213
  }, {
    key: 65,
    value: 276
  }, {
    key: 70,
    value: 214
  }, {
    key: 75,
    value: 287
  }, {
    key: 80,
    value: 234
  }, {
    key: 85,
    value: 278
  }, {
    key: 90,
    value: 213
  }, {
    key: 95,
    value: 267
  }, {
    key: 100,
    value: 254
  }, {
    key: 105,
    value: 287
  }, {
    key: 110,
    value: 216
  }, {
    key: 115,
    value: 290
  }, {
    key: 120,
    value: 287
  }, {
    key: 125,
    value: 267
  }, {
    key: 130,
    value: 289
  }, {
    key: 135,
    value: 267
  }, {
    key: 140,
    value: 234
  }, {
    key: 145,
    value: 298
  }, {
    key: 150,
    value: 245
  }, {
    key: 155,
    value: 276
  }, {
    key: 160,
    value: 217
  }, {
    key: 165,
    value: 276
  }, {
    key: 170,
    value: 245
  }, {
    key: 175,
    value: 245
  }, {
    key: 180,
    value: 216
  }, {
    key: 185,
    value: 276
  }, {
    key: 190,
    value: 212
  }, {
    key: 195,
    value: 265
  }, {
    key: 200,
    value: 213
  }, {
    key: 205,
    value: 254
  }, {
    key: 210,
    value: 267
  }, {
    key: 215,
    value: 245
  }, {
    key: 220,
    value: 213
  }, {
    key: 225,
    value: 278
  }, {
    key: 230,
    value: 256
  }, {
    key: 235,
    value: 256
  }, {
    key: 240,
    value: 216
  }, {
    key: 245,
    value: 156
  }, {
    key: 250,
    value: 178
  }, {
    key: 255,
    value: 190
  }, {
    key: 265,
    value: 189
  }, {
    key: 270,
    value: 225
  }, {
    key: 275,
    value: 267
  }, {
    key: 280,
    value: 277
  }, {
    key: 285,
    value: 266
  }, {
    key: 290,
    value: 256
  }, {
    key: 295,
    value: 266
  }, {
    key: 300,
    value: 245
  }
];
//设备5功率数据
var devicePowerData5 = [
  {
    key: 0,
    value: 189
  }, {
    key: 5,
    value: 256
  }, {
    key: 10,
    value: 289
  }, {
    key: 15,
    value: 267
  }, {
    key: 20,
    value: 467
  }, {
    key: 25,
    value: 246
  }, {
    key: 30,
    value: 280
  }, {
    key: 35,
    value: 266
  }, {
    key: 40,
    value: 290
  }, {
    key: 45,
    value: 345
  }, {
    key: 50,
    value: 244
  }, {
    key: 55,
    value: 269
  }, {
    key: 60,
    value: 290
  }, {
    key: 65,
    value: 278
  }, {
    key: 70,
    value: 267
  }, {
    key: 75,
    value: 216
  }, {
    key: 80,
    value: 290
  }, {
    key: 85,
    value: 278
  }, {
    key: 90,
    value: 298
  }, {
    key: 95,
    value: 256
  }, {
    key: 100,
    value: 278
  }, {
    key: 105,
    value: 210
  }, {
    key: 110,
    value: 342
  }, {
    key: 115,
    value: 200
  }, {
    key: 120,
    value: 234
  }, {
    key: 125,
    value: 312
  }, {
    key: 130,
    value: 345
  }, {
    key: 135,
    value: 122
  }, {
    key: 140,
    value: 366
  }, {
    key: 145,
    value: 255
  }, {
    key: 150,
    value: 278
  }, {
    key: 155,
    value: 265
  }, {
    key: 160,
    value: 245
  }, {
    key: 165,
    value: 255
  }, {
    key: 170,
    value: 276
  }, {
    key: 175,
    value: 287
  }, {
    key: 180,
    value: 298
  }, {
    key: 185,
    value: 280
  }, {
    key: 190,
    value: 245
  }, {
    key: 195,
    value: 234
  }, {
    key: 200,
    value: 265
  }, {
    key: 205,
    value: 276
  }, {
    key: 210,
    value: 287
  }, {
    key: 215,
    value: 267
  }, {
    key: 220,
    value: 298
  }, {
    key: 225,
    value: 213
  }, {
    key: 230,
    value: 254
  }, {
    key: 235,
    value: 245
  }, {
    key: 240,
    value: 267
  }, {
    key: 245,
    value: 245
  }, {
    key: 250,
    value: 231
  }, {
    key: 255,
    value: 245
  }, {
    key: 265,
    value: 278
  }, {
    key: 270,
    value: 256
  }, {
    key: 275,
    value: 134
  }, {
    key: 280,
    value: 156
  }, {
    key: 285,
    value: 178
  }, {
    key: 290,
    value: 243
  }, {
    key: 295,
    value: 178
  }, {
    key: 300,
    value: 155
  }
];
//设备6功率数据
var devicePowerData6 = [
  {
    key: 0,
    value: 352
  }, {
    key: 5,
    value: 320
  }, {
    key: 10,
    value: 233
  }, {
    key: 15,
    value: 333
  }, {
    key: 20,
    value: 256
  }, {
    key: 25,
    value: 278
  }, {
    key: 30,
    value: 256
  }, {
    key: 35,
    value: 267
  }, {
    key: 40,
    value: 286
  }, {
    key: 45,
    value: 298
  }, {
    key: 50,
    value: 120
  }, {
    key: 55,
    value: 245
  }, {
    key: 60,
    value: 288
  }, {
    key: 65,
    value: 167
  }, {
    key: 70,
    value: 257
  }, {
    key: 75,
    value: 157
  }, {
    key: 80,
    value: 183
  }, {
    key: 85,
    value: 147
  }, {
    key: 90,
    value: 198
  }, {
    key: 95,
    value: 158
  }, {
    key: 100,
    value: 256
  }, {
    key: 105,
    value: 256
  }, {
    key: 110,
    value: 265
  }, {
    key: 115,
    value: 234
  }, {
    key: 120,
    value: 276
  }, {
    key: 125,
    value: 256
  }, {
    key: 130,
    value: 214
  }, {
    key: 135,
    value: 114
  }, {
    key: 140,
    value: 156
  }, {
    key: 145,
    value: 189
  }, {
    key: 150,
    value: 231
  }, {
    key: 155,
    value: 265
  }, {
    key: 160,
    value: 178
  }, {
    key: 165,
    value: 345
  }, {
    key: 170,
    value: 265
  }, {
    key: 175,
    value: 312
  }, {
    key: 180,
    value: 267
  }, {
    key: 185,
    value: 245
  }, {
    key: 190,
    value: 189
  }, {
    key: 195,
    value: 168
  }, {
    key: 200,
    value: 190
  }, {
    key: 205,
    value: 221
  }, {
    key: 210,
    value: 256
  }, {
    key: 215,
    value: 254
  }, {
    key: 220,
    value: 234
  }, {
    key: 225,
    value: 289
  }, {
    key: 230,
    value: 233
  }, {
    key: 235,
    value: 354
  }, {
    key: 240,
    value: 216
  }, {
    key: 245,
    value: 246
  }, {
    key: 250,
    value: 254
  }, {
    key: 255,
    value: 167
  }, {
    key: 265,
    value: 178
  }, {
    key: 270,
    value: 190
  }, {
    key: 275,
    value: 234
  }, {
    key: 280,
    value: 125
  }, {
    key: 285,
    value: 178
  }, {
    key: 290,
    value: 241
  }, {
    key: 295,
    value: 213
  }, {
    key: 300,
    value: 178
  }
];
//当前总功率
var devicePowerDataTotal = [];
devicePowerData1.forEach(function(v, i){
  var total = devicePowerData1[i]['value'] + devicePowerData2[i]['value'] +devicePowerData3[i]['value'] +devicePowerData4[i]['value'] +devicePowerData5[i]['value'] +devicePowerData6[i]['value'] - 30;
  devicePowerDataTotal.push({key: i * 5, value: total});
});
