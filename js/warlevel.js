// 顶部数字加载
numBlue(11745, 'numBlue1', 'color-fff', $('.headCanshu1')[0])
numBlue(11745, 'numBlue1', 'color-fff', $('.headCanshu2')[0])
numBlue(11745, 'numBlue1', 'color-fff', $('.headCanshu3')[0])
numBlue(11745, 'numBlue1', 'color-fff', $('.headCanshu4')[0])
numBlue(111745, 'numBlue1', 'color-fff', $('.headCanshu5')[0])

/****** Echarts图表数据 ******/
// 今日岸电电量
var yongdianqingkuangEchart = echarts.init(document.getElementById('yongdianqingkuang'), 'light')
yongdianqingkuangOption.series[0].data = [12,3,6,12,9,12,15,12,12,3,12,12,9,12,9,12,12]
yongdianqingkuangEchart.setOption(yongdianqingkuangOption);
// 今日岸电电量
var mouthUserpowerEchart = echarts.init(document.getElementById('mouthUserpower'), 'light')
mouthUserpowerOption.series[0].data = [1200,3000,600,1200,900,1200,1500,1200,3242,3111,2212,2612,974,1872,911,121,112]
mouthUserpowerEchart.setOption(mouthUserpowerOption);

runDashboard(0, 380, 500, 0);
runDashboard(1, 381, 500, 0);
runDashboard(2, 382, 500, 0);
runDashboard(3, 180, 500, 0);
runDashboard(4, 181, 500, 0);
runDashboard(5, 182, 240, 0);
