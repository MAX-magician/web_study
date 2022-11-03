window.onload = () => {
  circleHeaderBtn();
};
function circleHeaderBtn() {
  let btn = document.querySelectorAll("#cccc > div");
  btn[circleHeaderSL].setAttribute("class", "active");
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
      for (let j = 0; j < btn.length; j++) {
        btn[j].setAttribute("class", "");
      }
      btn[i].setAttribute("class", "active");
      circleHeaderSL = i;
    };
  }
}
