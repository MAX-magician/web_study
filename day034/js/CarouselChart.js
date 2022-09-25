//找对象
var imgs = document.querySelectorAll(".carousel .container img");
var imgs_left = document.querySelector(".carousel .container div.arrow-left");
var imgs_right = document.querySelector(".carousel .container div.arrow-right");
var imgs_dots = document.querySelector(".carousel .container .dots");
var imgs_dotsa = document.querySelectorAll(".carousel .container .dots a");
//锁
var imgs_lock = false;
//创建变量 用来储存第几张的下标
var imgs_numb = 0;
//创建计时器
var imgs_timer;

//最开始自动播放没开始时的一次图片显示
changeimgs();
//自动播放
autorun();

//当左边按键被点击时
imgs_left.onclick = function () {
    imgs_buttonclick("left");
};
//当右边按键被点击时
imgs_right.onclick = function () {
    imgs_buttonclick("right");
};

//创建自动轮播方法
function autorun() {
  imgs_timer = setInterval(function () {
    imgs_numb++;
    changeimgs();
  }, 5000);
}
//创建切图方法
function changeimgs() {
  if (imgs_numb === imgs.length) {
    //当图片下标等于图片数组长度时 下标置零
    imgs_numb = 0;
  } else if (imgs_numb < 0) {
    //当图片下标小于0时 下标设置为最后一张图下标
    imgs_numb = imgs.length - 1;
  }
  //遍历图片
  for (var i = 0; i < imgs.length; i++) {
    //如果图片是要显示的图片
    if (i == imgs_numb) {
      //给小圆点设置class
      imgs_dotsa[i].setAttribute("class", "active");
      //显示图片
      imgs[i].style.opacity = 1;
    } else {
      imgs_dotsa[i].removeAttribute("class");
      imgs[i].style.opacity = 0;
    }
  }
}
//创建按键被点击后的方法
function imgs_buttonclick(imgs_button) {
  if (imgs_lock === false) {
    imgs_lock = true;
  } else {
    return;
  }
  setTimeout(function () {
    imgs_lock = false;
  }, 1000);
  clearInterval(imgs_timer);
  if (imgs_button === "left") {
    imgs_numb--;
  } else {
    imgs_numb++;
  }
  changeimgs();
  autorun();
}
//监听小圆点点击事件
imgs_dots.onclick = function (e) {
  //判断是否点击在小圆点上
  if (e.target.outerHTML.indexOf("class") == -1) {
    if (imgs_lock === false) {
      imgs_lock = true;
    } else {
      return;
    }
    setTimeout(function () {
      imgs_lock = false;
    }, 1000);
    clearInterval(imgs_timer);
    imgs_numb = e.target.getAttribute("index");
    changeimgs();
    autorun();
  }
};
