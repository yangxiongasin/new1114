// 重置页面body大小
var resetSize = function () {
  var  screenWidth = window.screen.width
  var  screenHeight = window.screen.height
  var  bodyWidth = $('body').width()
  var  bodyHeight = $('body').height()
  var widthScale = screenWidth / bodyWidth
  var heightScale = screenHeight / bodyHeight
  var leftval = bodyWidth/2 * (1-widthScale)
  var topval = bodyHeight/2 * (1-heightScale)
  $('body').css({
    'transform' : 'scale(' + widthScale + ', ' + heightScale + ')',
    'left': -leftval,
    'top': -topval
  })
}


// 第一个是选择器，第二个是数字大小默认为0，第三个是起始的数字默认为0，第四个是结束时间2000ms
var numberRock =  function (select, count, sum, time) {
  // 单个字是48，1是33
  var num = count + '';
  var list = num.split("");
  var width = 0;
  for(var i in list) {
    if(list[i] === '1') {
      width += 33;
    } else {
      width += 48;
    }
  }
  $(select).width(width).numberRock({
    count: count,
    sum: sum,
    time: time
  });
}

// 添加点
function addDot(data, elem) {
  var DotHtml = ''
  for (var i = 0; i < data.length; i++ ) {
    DotHtml += "<div class='posi_abso px-10 py-10' style='top:" +  data[i].top + "px; left:" + data[i].left + "px;'>" +
                "  <div class='dot-animation larger yellow' style='top:-15px; left:-15px;'>" +
      "            <div class='animate-symbol yel symbol-1 run-animate'></div>" +
      "            <div class='animate-symbol yel symbol-2 run-animate'></div>" +
      "            <div class='animate-symbol yel symbol-3 run-animate'></div>" +
      "          </div>" +
      "        </div>"
  }
  elem.html(DotHtml)
}

function addProgress(data, elem) {
  var addProgressHtml = ''
  for (var i = 0; i< data.length; i++) {
    var progressVal = Number(data[i].progressVal) / Number(data[i].allVal)
    if (Number(data[i].progressVal) >  Number(data[i].allVal) || data[i].allVal === '') {
      console.log(data[i].allVal)
      progressVal = 1
    }
    addProgressHtml += "<div class='contProgress posi_abso font-36' style='left: " + data[i].left + "px; top: " + data[i].top + "px;'>" +
      "      <div class='d-flex align-items-center'>" +
      "        <div class='progress posi_rela mr-40'>" +
      "        <div class='progressval posi_abso' style='width: " + 326*progressVal + "px'></div>"
    if (Number(data[i].progressVal) >  Number(data[i].allVal) && data[i].allVal !== '') {
      addProgressHtml += "<div class='progressval overMax posi_abso' style='width: 32px;left: 312px;'></div>"
    }
    if (data[i].allVal === '') {
      addProgressHtml +=  "</div><span></span></div>"

    }else {
      addProgressHtml +=  "</div>" + "<span>" + Number(data[i].allVal) + "" + data[i].unit +  " </span></div>"

    }
    if (Number(data[i].progressVal) >  Number(data[i].allVal) && Number(data[i].allVal) === 0) {
      console.log(data[i].allVal, '12312')
      addProgressHtml += "      <div class='flex-cen-cen flex-column posi_abso mt-22 contProgressNum color-0CA851' style='width: 200px;left: " + (326*progressVal - 100) + "px'>" +
        "        <img src='./image/icon/arrowed.png' alt=''>"
    } else if (Number(data[i].progressVal) >  Number(data[i].allVal)) {

      addProgressHtml +=       "      <div class='flex-cen-cen flex-column posi_abso mt-22 contProgressNum color-F92B12' style='width: 300px;left: 197px'>"+
        "        <img src='./image/icon/arrowed-active.png' alt=''>"
    } else {
      addProgressHtml += "      <div class='flex-cen-cen flex-column posi_abso mt-22 contProgressNum color-0CA851' style='width: 300px;left: " + (326*progressVal - 150) + "px'>" +
        "        <img src='./image/icon/arrowed.png' alt=''>"
    }
    addProgressHtml += "        <span class='mt-14'>" + Number(data[i].progressVal) + " "  + data[i].unit +" </span>" +
      "      </div>" +
      "    </div>"
  }
  elem.find('.progressBase').html('')
  elem.find('.progressBase').html(addProgressHtml)
}

// 设置进度条
function setProcess(arrData, maxData){
  var listhtml = ''
  for (var i = 0; i < listData.length; i++) {
    var progress = listData[i].value / maxData * 290
    listhtml += "<div class='flex-bet-cen mt-20'>" +
      "            <span style='color: #" + listData[i].color + ";'>" + listData[i].name + "</span>" +
      "            <div class='si_rela progress-r'>" +
      "              <div class='posi_abso progress-r-son' style='width: " + progress + "px; background: #" + listData[i].color + "'></div>" +
      "            </div>" +
      "            <span style='color: #" + listData[i].color + ";'>" + listData[i].value + "</span>" +
      "          </div>"
  }
  $('.listhtml').html(listhtml)
}

// 加逗号蓝色字体函数
function numBlue(num, bgColor, textColor, elem) {
  var numArray = String(num).split('')
  var newFrag = document.createDocumentFragment()
  for (var i = 0; i < numArray.length; i++) {
    var newDiv = document.createElement('div')
    newDiv.classList.add("numBlue")
    newDiv.classList.add(bgColor)
    var newSpan = document.createElement('span')
    newSpan.innerHTML = numArray[i]
    newSpan.classList.add(textColor)
    newDiv.appendChild(newSpan)
    newFrag.appendChild(newDiv)
  }
  elem.innerHTML = ''
  elem.appendChild(newFrag)
}

function runDashboard(index, val, max, min) {
  var $dom = $('.dashboard-list').eq(index);
  $dom.find('.dashboard-min').text(min || 0);
  $dom.find('.dashboard-max').text(max);

  var unit;
  switch (index) {
    case 0: unit = 'V'; break;
    case 1: unit = 'V';break;
    case 2: unit = 'V'; break;
    case 3: unit = 'A'; break;
    case 4: unit = 'A'; break;
    case 5: unit = 'A'; break;
  }
  $dom.find('.dashboard-val').text(val + unit);
  $dom.find('.dashboard-highlight, .dashboard-pointer').css('transform', 'rotate(' + val / max * 100 + 'deg)');
}

//最小值
Array.prototype.min = function() {
  var min = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++){
    if (this[i] < min){
      min = this[i];
    }
  }
  return min;
}
//最大值
Array.prototype.max = function() {
  var max = this[0];
  var len = this.length;
  for (var i = 1; i < len; i++){
    if (this[i] > max) {
      max = this[i];
    }
  }
  return max;
}

