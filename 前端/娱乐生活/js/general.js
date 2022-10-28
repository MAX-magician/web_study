//公共变量 保存状态
var mainLM = "";
// 局部刷新 同步
function ajaxs(urls, maindiv) {
  var divs = document.getElementById(maindiv);
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("get", urls, false, xmlhttp);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const params = "THEMEID=" + urls;
  xmlhttp.send(params);
  var responseText = xmlhttp.responseText;
  divs.innerHTML = responseText;
}
//header_caidan的方法
function headerMenuS(){
  if(mainLM == "main"){
    mainLM = "mainList";
  }else{
    mainLM = "main";
  }
  headerMenuSet();
}
// 切换列表样式
function headerMenuSet() {
  if (mainLM === "mainList") {
    gameMenuMain.setAttribute("class", "mainList");
    mainLM = "mainList";
  } else {
    gameMenuMain.setAttribute("class", "main");
    mainLM = "main";
  }
}
function bindPager() {
  let game_menu_list = document.querySelectorAll("#gameMenuMain > div");
  for(let i = 0; i < game_menu_list.length; i++){
    game_menu_list[i].onclick = function () {
      let names = this.querySelector(".names").innerHTML;
      ajaxs("./page/gameIntroduce.html", "maindiv");
      gameIntroduces(names);
    }
  }
}
function gameIntroduces(names){
  gameIntroName.innerHTML = names;
}
