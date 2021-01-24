
var $nav = $('.nav')
var v1 = $nav.offset().top
var $backTop = $('.backTop')

// 获取楼层距离顶部的高度
var $subnav = $('.subnav')
var $lis = $('.subnav li')
var $f1 = $('.jia').offset().top - 150
var $f2 = $('.dian').offset().top - 150
var $f3 = $('.ju').offset().top - 150
var $f4 = $('.fu').offset().top - 150

$(document).scroll(function () {
  var v2 = $(this).scrollTop()
  if (v2 >= v1) {
    $nav.addClass('active')
    $backTop.show()
  } else {
    $nav.removeClass('active')
    $backTop.hide()
  }

  // 楼层高亮显示部分
  if (v2 >= $f1) {
    $subnav.show()
  } else {
    $subnav.hide()
  }

  // 滚到当前楼层，高亮显示
  if (v2 >= $f1) {
    $lis.eq(0).addClass('current').siblings().removeClass('current')
  }
  if (v2 >= $f2) {
    $lis.eq(1).addClass('current').siblings().removeClass('current')
  }
  if (v2 >= $f3) {
    $lis.eq(2).addClass('current').siblings().removeClass('current')
  }
  if (v2 >= $f4) {
    $lis.eq(3).addClass('current').siblings().removeClass('current')
  }
})

// 点击侧边栏，滚动到相应的位置
$lis.click(function () {
  var idx = $(this).index()
  var fh = $('.louceng .lc').eq(idx).offset().top - 50
  $('html,body').animate({ 'scrollTop': fh }, 500)
})

// 返回顶部，点击直接返回
// $backTop.click(function() {
//   $(document).scrollTop(0)
// })

// 运动返回顶部
$backTop.click(function () {
  $('html, body').animate({ 'scrollTop': 0 }, 500)
})