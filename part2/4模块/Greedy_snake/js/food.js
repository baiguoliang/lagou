// 需要缩小定义 构造函数的作用域
// function fn() {
//   // 定义的就是局部的变量

// }

// fn();

// 匿名函数，自调用函数，IIFE，关住作用域
(function () {
  // 全局变量
  var ps = 'absolute';
  // 创建食物的构造函数
  function Food(option) {
    // 避免传入的参数数据类型不对，或者没有传参
    option = option instanceof Object ? option : {};
    // 传入的数据可能是类似的数组等对象，所以需要进一步判断
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;
    this.color = option.color || 'green';
    // 增加一个属性，存储将来这个对象渲染出来的所有 div 元素
    this.elements = [];
  }

  // 渲染一个元素到页面之上，需要添加到原型对象的方法中
  Food.prototype.render = function (map) {
    // 创建一个新的 div 元素
    var ele = document.createElement('div');
    // 每次设置样式之前都随机获取一个 x 和 y 值
    this.x = Tools.getRandom(0, map.clientWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.clientHeight / this.height - 1) * this.height;
    // 添加对应的样式
    ele.style.width = this.width + 'px';
    ele.style.height = this.height + 'px';
    ele.style.left = this.x + 'px';
    ele.style.top = this.y + 'px';
    ele.style.backgroundColor = this.color;
    ele.style.position = ps;
    // 让新元素添加到指定的父级中
    map.appendChild(ele);
    // 将新元素添加到数组中，方便后期调用删除
    this.elements.push(ele);
  }
  // 删除一个食物 div 元素的方法
  Food.prototype.remove = function (map, i) {
    // 可以通过一些方法获取要被删除的食物的下标
    // 将元素从 html 结构中删除
    map.removeChild(this.elements[i]);
    // 将元素从数组中删除
    this.elements.splice(i, 1);
  }
  // 利用 window 对象暴露 Food 函数可以给外部使用
  window.Food = Food;
})();
// 需要想办法在外面调用到这个 Food 函数