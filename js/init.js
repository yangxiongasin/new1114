// 顶部数字加载
numBlue(150, 'numBlue1', 'color-fff', $('.headCanshu1')[0])
numBlue(1234, 'numBlue1', 'color-fff', $('.headCanshu2')[0])
numBlue(2345, 'numBlue1', 'color-fff', $('.headCanshu3')[0])
numBlue(47626, 'numBlue1', 'color-fff', $('.headCanshu4')[0])
numBlue(4812, 'numBlue1', 'color-fff', $('.headCanshu5')[0])
numBlue(7216, 'numBlue1', 'color-fff', $('.headCanshu6')[0])

// 今日岸电电量
numBlue(1174729, 'numBlue2', 'color-F6992E', $('.jraddlVal')[0])
numBlue(743302, 'numBlue2', 'color-FED42B', $('.jradfyVal')[0])

/****** Echarts图表数据 ******/
// 今日岸电电量
var andiandianliEchart = echarts.init(document.getElementById('andiandianli'), 'light')
andiandianliOption.series[0].data = [1100, 1240, 1349, 1400, 1500, 1600, 2000, 2100, 2080, 1900, 1872, 1782, 1411, 1320, 2100, 3120, 2300, 2230, 2130, 2140, 2100, 3120, 2300, 1230, 1230, 2130]
andiandianliOption.series[1].data = [1001, 1140, 1249, 1460, 1600, 1700, 2300, 2600, 2380, 1900, 1862, 1682, 1411, 1320, 2100, 2120, 2500, 2630, 2730, 2840, 2900, 3120, 2300, 2130, 3230, 2130]
andiandianliEchart.setOption(andiandianliOption);
// 今日岸电电量
var andiandianliangEchart = echarts.init(document.getElementById('andiandianliang'), 'light')
andiandianliangOption.series[0].data = [1100, 1240, 1349, 1400, 1500, 1600, 2000, 2100, 2080, 1900, 1872, 1782, 1411, 1320, 2100, 3120, 2300, 2230, 2130, 2140, 2100, 3120, 2300, 1230, 1230, 2130]
andiandianliangOption.series[1].data = [1001, 1140, 1249, 1460, 1600, 1700, 2300, 2600, 2380, 1900, 1862, 1682, 1411, 1320, 2100, 2120, 2500, 2630, 2730, 2840, 2900, 3120, 2300, 2130, 3230, 2130]
andiandianliangEchart.setOption(andiandianliangOption);
// 今日岸电费用
var andianfeiyongEchart = echarts.init(document.getElementById('andianfeiyong'), 'light')
andianfeiyongOption.series[0].data = [11000, 12400, 13409, 14000, 15000, 16000, 20000, 21000, 20800, 19000, 18072, 17082, 10411, 13200, 21000, 31200, 20300, 22030, 21030, 21400, 21000, 31200, 23000, 12300, 12300, 21300]
andianfeiyongOption.series[1].data = [31000, 52400, 23409, 14000, 75000, 16000, 10000, 31000, 20800, 19000, 58072, 17082, 20411, 33200, 21000, 51200, 70300, 22030, 21030, 21400, 51000, 31200, 23000, 32300, 42300, 21300]
andianfeiyongEchart.setOption(andianfeiyongOption);
// 岸电电量
var andiandianliang_rEchart = echarts.init(document.getElementById('andiandianliang_r'), 'light')
andiandianliang_rOption.series[0].data = [20,30,40,50,60,50,78,88,90,56,23,54,120,110,90,60]
andiandianliang_rEchart.setOption(andiandianliang_rOption);
// 岸电费用
var andianjineEchart = echarts.init(document.getElementById('andianjine'), 'light')
andianjineOption.series[0].data = [20,30,40,50,60,50,78,88,90,56,23,54,120,110,90,60]
andianjineEchart.setOption(andianjineOption);
// 岸电次数
var andiancishuEchart = echarts.init(document.getElementById('andiancishu'), 'light')
andiancishuOption.series[0].data = [20,30,40,50,60,50,78,88,90,56,23,54,120,110,90,60]
andiancishuEchart.setOption(andiancishuOption);

setProcess(listData, 900000000)


window.addEventListener('resize', function () {
  resetSize()
})


var $circlContainer = $('.js-circle-container'), circleHtml = '';
circleListData.forEach((i)=> {
  circleHtml +=
    "<div class='circle-container' style='top:"+ i.top +"px; left: "+ i.left +"px;background: red'>" +
    "<div class='circle'></div>" +
    "<div class='pointer'><p>"+ i.name +"</p></div>"+
    "</div>";
});

$circlContainer.html(circleHtml).on('click', '.circle', function() {
  switch($(this).next().text()) {
    case '秭归A':
      window.open('./warlevel.html')
      break;

    case '秭归B':
      window.open('./warlevel.html')
      break;

    default:
      window.open('./warlevel.html')
      break;
  }
});