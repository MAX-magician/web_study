//找对象
var backTopButton = document.querySelector(".side-toolbar a:last-child");
//当页面刚加载完时
window.onload = function() {
  backTop()
}
//当页面滚动时
window.onscroll = function () {
  backTop();
};
//点击返回顶部按钮时
backTopButton.onclick = function () {
  var back_timer = setInterval(function () {
    if(document.documentElement.scrollTop < 80){
      document.documentElement.scrollTop = 0;
      clearInterval(back_timer);
    }
    document.documentElement.scrollTop -= 80;
  },2);
};
//创建方法
function backTop(){
  //判断滚动条是否向下滚
  if (document.documentElement.scrollTop <= 200) {
    //不足10不显示返回顶部按钮
    backTopButton.style.display = "none";
  } else {
    //大于10显示
    backTopButton.style.display = "block";
  }
}