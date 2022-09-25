//找对象
var video_div = document.querySelectorAll(".video-area a");
for (var i = 0; i < video_div.length; i++) {
  video_div[i].onclick = function () {
    //清除隐藏
    vvvv.removeAttribute("style");
    //设置标题
    vvvv1.innerHTML = this.querySelector(".title").innerHTML;
    //设置播放地址
    vvvvs.setAttribute("src", this.getAttribute("data-src"));
  };
}
vvvv2.onclick = function (e) {
  //隐藏
  vvvv.style.display = "none";
  //暂停
  vvvvs.pause();
};
