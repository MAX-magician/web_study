var footer_click = document.querySelectorAll(".footer_menu > div");
window.onload = function () {
  ajaxs("./page/game_menu.html", "maindiv");
  mainLM = "main";
  headerMenuSet();
  bindPager();
};
for (let i = 0; i < footer_click.length; i++) {
  footer_click[i].onclick = function () {
    for (let footers = 0; footers < footer_click.length; footers++) {
      if (footers === i) {
        footer_click[footers].setAttribute("class", "footers selected");
        if (footers === 0) {
          ajaxs("./page/game_menu.html", "maindiv");
          headerMenuSet();
          bindPager();
        }else if (footers === 1) {
          ajaxs("./page/circle.html", "maindiv");
          circleHeaderBtn();
        }
        continue;
      }
      footer_click[footers].setAttribute("class", "footers");
    }
  };
}
