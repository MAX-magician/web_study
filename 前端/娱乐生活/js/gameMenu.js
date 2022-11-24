//header_caidan的方法
function headerMenuS() {
  if (mainLM == "main") {
    mainLM = "mainList";
  } else {
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
  for (let i = 0; i < game_menu_list.length; i++) {
    game_menu_list[i].onclick = function () {
      let names = this.querySelector(".names").innerHTML;
      let aaa = document.createElement("div");
      aaa.setAttribute("id", "gameMenuMain_Infos");
      document.body.appendChild(aaa);
      ajaxs("./page/gameIntroduce.html", "gameMenuMain_Infos");
      let exit = document.querySelector(".introImg > span:nth-child(2)");
      exit.onclick = function () {
        document.body.removeChild(aaa);
      }
      gameIntroduces(names);
    };
  }
}
function gameIntroduces(names) {
  gameIntroName.innerHTML = names;
  gameIntroNameImg.innerHTML = names;
}
