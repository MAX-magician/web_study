window.onload = function () {
  ajaxs("./page/game_index.html", "maindiv");
};
var footer_click = document.querySelectorAll(".footer_menu > div");
function footers_click() {
  for (let footers = 0; footers < footer_click.length; footers++) {
    footer_click[footers].setAttribute("class", "footers");
  }
}
footer_click[0].onclick = function(){
  footers_click();
  this.setAttribute("class", "footers selected");
  cheageUrl("game_index")
  ajaxs("./page/game_index.html", "maindiv");
}
footer_click[1].onclick = function(){
  footers_click();
  this.setAttribute("class", "footers selected");
  cheageUrl("circle");
  ajaxs("./page/game_index.html", "maindiv");
}
footer_click[2].onclick = function(){
  footers_click();
  this.setAttribute("class", "footers selected");
  cheageUrl("myinfo")
  ajaxs("./page/game_index.html", "maindiv");
}